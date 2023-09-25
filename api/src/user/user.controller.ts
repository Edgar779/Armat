import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Role, ACCESS_TOKEN, SessionDTO, SignedInDTO } from '../auth';
import { AuthService } from '../auth/auth.service';
import { UserDTO, CreateUserDTO, EditUserDTO } from './dto';
import { UserService } from './user.service';
import { ParseObjectIdPipe, Public } from '../util';
import { summaries } from './user.constants';

@Controller('users')
@ApiTags('User Endpoints')
export class UserController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  /** Create a new user */
  @Post()
  @Public()
  @ApiBody({ type: CreateUserDTO })
  @ApiOkResponse({ type: SignedInDTO })
  async create(@Body() dto: CreateUserDTO): Promise<SignedInDTO> {
    const auth = await this.userService.create(dto);
    return auth;
  }

  /** invite the user by member */
  @Patch('invite/:email')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: String })
  async inviteByMember(@Body('user') user: SessionDTO, @Param('email') email: string): Promise<string> {
    return await this.userService.inviteByMember(user.id, email);
  }

  /** Get all users */
  @Get()
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: [UserDTO] })
  async getAll(@Body('user') user: SessionDTO): Promise<UserDTO[]> {
    this.authService.enforceAccess([Role.ADMIN], user);
    const users = await this.userService.getAll();
    return users;
  }

  /** user gets their own profile */
  @Get('myProfile')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: UserDTO })
  async getMyProfile(@Body('user') user: SessionDTO) {
    const sanitizedUser = await this.userService.get(user.id);
    return sanitizedUser;
  }

  /** Get a specific user by its id */
  @Get(':id')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: UserDTO })
  async get(@Param('id', ParseObjectIdPipe) userId: string, @Body('user') session: SessionDTO) {
    this.authService.enforceAccess([Role.ADMIN], session);
    const user = await this.userService.get(userId);
    return user;
  }

  /** Edit my profile */
  @Patch()
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOperation({ summary: summaries.EDIT_MY_PRROFILE })
  @ApiBody({ type: EditUserDTO })
  @ApiOkResponse({ type: UserDTO })
  async edit(@Body() dto: EditUserDTO): Promise<UserDTO> {
    const user = await this.userService.edit(dto);
    return user;
  }

  /** Delete a user from the system */
  @Delete(':id')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOperation({ summary: summaries.DELETE })
  async delete(@Param('id', ParseObjectIdPipe) userId: string): Promise<string> {
    return await this.userService.remove(userId);
  }
}
