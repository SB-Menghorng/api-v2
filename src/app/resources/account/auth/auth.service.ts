// ================================================================>> Core Library
import { BadRequestException, Injectable }  from "@nestjs/common";
import { DatabaseError, Op }                from "sequelize";
import { Request }                          from "express";
import { InjectModel }                      from "@nestjs/sequelize";
// ================================================================>> Third Party Library
import * as jwt                             from 'jsonwebtoken';
import * as bcrypt                          from "bcryptjs"
// ================================================================>> Custom Library
import { UserDto }                          from "./auth.dto";
import User                                 from "../../../../models/User/User.model";
import { UsersActiveEnum }                  from "../../../../app/enums/user/active.enum";
import UsersType                            from "../../../../models/User/Type.model";
import { jwtConstants }                     from "../../../../app/shared/constants.twt";
import Position                             from "../../../../models/User/Position.model";
import Department                           from "../../../../models/User/Department.model";
import UsersJob                             from "../../../../models/User/Job.model";
import { IpAddressService }                 from "../../../../app/CymCyber/ip-address.service";
import UsersTitle                           from "../../../../models/User/Title.model";


interface LoginPayload {
    username: string;
    password: string;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly ipAddressService: IpAddressService,
        // @InjectModel(UsersJob) private readonly jobModel: typeof UsersJob,
        // @InjectModel(Department) private readonly departmentModel: typeof Department,
        // @InjectModel(Position) private readonly positionModel: typeof Position,
        // @InjectModel(UsersTitle) private readonly titleModel: typeof UsersTitle,
    ) {}

  /** @userLogin */
async login(body: LoginPayload, req: Request): Promise<{  access_token: string, expires_in: string, user: UserDto, ip: string }> {
    let user: User;
    const { username } = body;
    
    // ================================================>> Construct the query condition based on the format of the username
    const whereCondition = /^\d{9,10}$/.test(username)
        ? { phone: username, is_active: UsersActiveEnum.Active }
        : {
            [Op.or]: [
                { username: username },
                { email: username }
            ],
            is_active: UsersActiveEnum.Active
        };
    try {
        user = await User.findOne({
            where: whereCondition,
            attributes: ['id', 'username', 'avatar', 'phone', 'email', 'password'],
            include: [
                { model: UsersType, attributes: ['id', 'en_name'] },
                { model: Position, attributes: ['id', 'en_name'] },
                { model: Department, attributes: ['id', 'en_name'] },
                { model: UsersJob, attributes: ['id', 'en_name'] },
                { model: UsersTitle, attributes: ['id', 'name', 'abbre']}
            ]
        });
    } catch (error) {
        console.error(error);
        if (error instanceof DatabaseError && error.message.includes('invalid identifier')) {
            throw new BadRequestException('Invalid input data or database error', 'Database Error');
        } else {
            throw new BadRequestException('Server database error', 'Database Error');
        }
    }

    if (!user) {
        throw new BadRequestException('ឈ្មោះអ្នកប្រើឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ។');
    }

    const isPasswordValid = await bcrypt.compare(body.password, user.password);

    if (!isPasswordValid) {
        throw new BadRequestException('ឈ្មោះអ្នកប្រើឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ។', 'error');
    }

    // ================================================>> If user have not been approved by admin
    if (user.is_approved === 0) {
    throw new BadRequestException('Your account has not been approved yet, please wait for administrator approval.', 'Approval Required');
    }

    try {
        const token = this._generateToken(user);
        const ip = this.ipAddressService.getIP(req);

    // ===>> Prepare Response
        return {
            access_token: token,
            expires_in: `${jwtConstants.expiresIn / 3600}h`,
            user: new UserDto(user),
            ip: ip
            }
    } catch (error) {
        throw new BadRequestException('មិនអាចបង្កើតនិមិត្តសញ្ញាទេ', 'Fail');
    }

}
private _generateToken(user: User): string {
        return jwt.sign (
            {
                user: new UserDto(user),
                role: user.type.en_name,
            },
            jwtConstants.secret,
            {
                expiresIn: jwtConstants.expiresIn, 
            }
        );
    } 
}   
