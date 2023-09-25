import { PartialType } from '@nestjs/swagger';
import { CreateEventTagDto } from './create-event-tag.dto';

export class UpdateEventTagDto extends PartialType(CreateEventTagDto) {}
