import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { SessionDTO } from '../../auth';
import { SettingsDTO } from './settings.dto';
import { OrganizerDTO } from './organizer.dto';
import { FileDTO } from '../../file';

export class EditUserDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  fullName?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  phoneNumber?: string;
  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  email?: string;
  @ApiProperty({ type: FileDTO, required: false })
  @IsOptional()
  changeAvatar?: FileDTO;
  @ApiProperty()
  @IsOptional()
  removeAvatar?: boolean;
  @ApiProperty({ type: () => OrganizerDTO, required: false })
  @IsOptional()
  organizer?: OrganizerDTO;
  @ApiProperty()
  @IsOptional()
  settings?: SettingsDTO;

  /** Set by the system */
  user?: SessionDTO;
}
