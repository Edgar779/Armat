import { ApiProperty } from '@nestjs/swagger';
import { AuthDTO } from '../../auth';
import { OrganizerDTO } from '.';
import { FileDTO } from '../../file';
import { SettingsDTO } from './settings.dto';

export class UserDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  orgs: Array<any>;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  email: string;
  @ApiProperty({ type: FileDTO, required: false })
  avatar?: FileDTO;
  @ApiProperty({ required: false })
  socialAvatar?: string;
  @ApiProperty({ required: false })
  phoneNumber?: string;
  @ApiProperty({ type: () => OrganizerDTO })
  organizerInfo?: OrganizerDTO;
  @ApiProperty()
  settings: SettingsDTO;
  @ApiProperty({ type: AuthDTO, required: false })
  auth?: AuthDTO | string;
}
