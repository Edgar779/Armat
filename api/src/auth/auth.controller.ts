import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { RESET_TOKEN, ACCESS_TOKEN } from './constants';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ResetPassGuard } from './guards';
import { AuthService } from './auth.service';
import { SigninDTO, SignedInDTO, ChangePassDTO, ResetPassDTO, SessionDTO, AuthDTO } from './dto';
import { Public } from '../util';

@Controller('auth')
@ApiTags('Authentication Endpoints')
export class AuthController {
  /** Dependency Injection */
  constructor(private readonly authService: AuthService) {}

  /** Sign in a user */
  @Post('signin')
  @Public()
  @ApiBody({ type: SigninDTO })
  @ApiOkResponse({ type: SignedInDTO })
  async signin(@Body() signinDTO: SigninDTO): Promise<SignedInDTO> {
    const auth = await this.authService.signin(signinDTO);
    return auth;
  }
  
  /** Changing user password */
  @Post('changePassword')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: ChangePassDTO })
  @ApiOkResponse({ type: SignedInDTO })
  async changePassword(@Body() changePassDTO: ChangePassDTO): Promise<SignedInDTO> {
    const auth = await this.authService.changePassword(changePassDTO);
    return auth;
  }
  /** Forgot Password */
  @Get('forgotPassword/:email')
  @Public()
  async forgotPassword(@Param('email') email: string) {
    return await this.authService.forgotPassword(email);
  }

  /** Reseting the password */
  @Post('resetPassword')
  @ApiBody({ type: ResetPassDTO })
  @ApiHeader({ name: RESET_TOKEN })
  @ApiOkResponse({ type: SignedInDTO })
  @UseGuards(new ResetPassGuard())
  async resetPassword(@Body() resetPassDTO: ResetPassDTO): Promise<SignedInDTO> {
    const auth = await this.authService.resetPassword(resetPassDTO);
    return auth;
  }

  /** Change the role of a user to admin */
  @Patch('setRoleAdmin')
  @ApiHeader({ name: ACCESS_TOKEN })
  async setRoleAdmin(@Body('user') user: SessionDTO): Promise<any> {
    const auth = await this.authService.setRoleAdmin(user.id);
    return auth;
  }

  /** logs out the user by placing the active token in the blacklist */
  @Get('logout')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: String, description: 'token that was invalidated' })
  async logout(@Body('user') session: SessionDTO): Promise<string> {
    return await this.authService.logout(session.id, session.token);
  }

  /** get by email */
  @Get(':email')
  @ApiHeader({ name: ACCESS_TOKEN })
  async getByEmail(@Param('email') email: string) {
    const sanitizedUser = await this.authService.getByEmail(email);
    return sanitizedUser;
  }
}
/** End of Controller */
