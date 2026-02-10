import { IsEmail, IsString, MinLength, MaxLength } from "class-validator";

export class CreateUserDto {
    
    @IsEmail({}, {message: "El email es invalido"})
    email: string;

    @IsString()
    @MinLength(3, {message: "El nombre debe tener al menos 3 caracteres"})
    @MaxLength(20)
    nickname: string;

    @IsString()
    @MinLength(8, {message: "La contraseña debe tener al menos 8 caracteres"})
    password: string;

}
