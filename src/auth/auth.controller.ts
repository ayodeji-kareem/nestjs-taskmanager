// import { User } from './user.entity';
import { AuthService } from './auth.service';
// import { AuthGuard } from '@nestjs/passport';
// import { GetUser } from './get-user.decorator';
import { AuthCredentialDto } from './dto/auth.credentials.dto';
import {
  Body,
  Controller,
  Post,
  // UseGuards,
  ValidationPipe,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentialDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }
}
