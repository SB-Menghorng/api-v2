// ================================================================>> Core Library
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

// ================================================================>> Custom Library
import User                                           from "src/models/User/User.model";

export class UserDto{
    id:         number;
    name:       string;
    email:      string;
    avatar:     string;
    phone:      string;
    username:   string;
    title:      string | null;
    job:        string | null;
    department: string | null;
    position:   string | null;
    role:       string | null;
    constructor(user: User){
        this.id         = user.id
        this.name       = user.en_name
        this.email      = user.email
        this.avatar     = user.avatar
        this.phone      = user.phone
        this.username   = user.username
        this.title      = user.title?.name?? null
        this.job        = user.job?.en_name?? null
        this.department = user.department?.en_name ?? null
        this.position   = user.position?.en_name?? null
        this.role       = user.type?.en_name?? null
    }

}

export class LoginRequestDto {
    @IsString()
    @IsNotEmpty({message: 'Username or phone number is required'})
    username: string;

    @IsString()
    @IsNotEmpty({message: 'សូមបញ្ចូលឈ្មោះឬលេខទូរស័ព្ទ'})
    @MinLength(6, {message: 'លេខសម្ងាត់ត្រូវធំជាងឬស្មើ៦'})
    @MaxLength(20, {message: 'លេខសម្ងាត់ត្រូវតូចជាងឬស្មើ២០'})
    password: string;
}

