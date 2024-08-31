import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

import User from "src/models/User/User.model";

@Injectable()
@ValidatorConstraint({ async: true})
export class IsUniqueConstraint implements ValidatorConstraintInterface {
    constructor(@InjectModel(User) private readonly userModel: typeof User ){} 

    async validate(value: any, args: ValidationArguments) {
        const field = args.property;
        const user = await this.userModel.findOne({where: { [field]: value}});
        return !user;
    }

    defaultMessage(args: ValidationArguments): string {
        return `${args.property} ត្រូវបានប្រើរួចហើយ។ សូមជ្រើសរើសឈ្មោះផ្សេងទៀត។`
    }
}

export function IsUnique(ValidationOption?: ValidationOptions){
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: ValidationOption,
            constraints: [],
            validator: IsUniqueConstraint,
        });
    }
}