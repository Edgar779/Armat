import { Transform } from 'class-transformer';

const booleanMapper = new Map([
  ['undefined', undefined],
  ['true', true],
  ['false', false],
]);

export const ParseBooleanPipe = () => Transform(({ value }) => booleanMapper.get(value));
