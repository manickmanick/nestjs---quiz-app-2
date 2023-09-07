import { IsNotEmpty } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'The tile should have been sent' })
  title: String;
  @IsNotEmpty({ message: 'The tile description have been sent' })
  description: string;
}
