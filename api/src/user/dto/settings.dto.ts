import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class NotificationSettingsDTO {
  @ApiProperty()
  @IsBoolean()
  allowText: boolean;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  allowInApp: boolean;
  @ApiProperty()
  @IsBoolean()
  allowEmail: boolean;
}

export class SettingsDTO {
  @ApiProperty()
  @IsOptional()
  notificationSettings: NotificationSettingsDTO;
}
