import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class signIn {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @MinLength(4)
    password: string;
}
