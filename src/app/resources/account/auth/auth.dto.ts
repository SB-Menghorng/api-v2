// ================================================================>> Core Library
import { IsNotEmpty, IsOptional, IsString, IsEmail, Matches, MaxLength, MinLength } from "class-validator";
import { IsUnique } from "../../../../app/shared/validateors/is-unique.validator";

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

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(60)
    @IsUnique({ message: 'ឈ្មោះអ្នកប្រើប្រាស់នេះត្រូវបានប្រើរួចហើយ។ សូមជ្រើសរើសឈ្មោះផ្សេងទៀត។' })
    username: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(60)
    kh_name: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(60)
    en_name: string;
  
    @IsString()
    @IsNotEmpty()
    @Matches(/^[0-9]{8,15}$/, { message: 'លេខទូរស័ព្ទមិនត្រឹមត្រូវ។' })
    @IsUnique({ message: 'លេខទូរស័ព្ទនេះត្រូវបានប្រើរួចហើយ។ សូមព្យាយាមមួយផ្សេងទៀត។' })
    phone: string;
  
    @IsEmail({}, { message: 'អ៊ីមែលមិនត្រឹមត្រូវ។' })
    @IsNotEmpty()
    @MaxLength(40)
    @IsUnique({ message: 'អ៊ីមែលត្រូវបានយករួចហើយ។' })
    email: string;
  
    @IsNotEmpty()
    @IsString()
    sex_id: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(60)
    password: string;
  
    @IsOptional()
    @IsString()
    job_id?: string;
  
    @IsOptional()
    @IsString()
    position_id?: string;
  
    @IsOptional()
    @IsString()
    department_id?: string;
  }
