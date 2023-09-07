import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpCode,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/createQuiz.dto';
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get()
  getQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuiz(@Body() data: CreateQuizDto) {
    return data;
  }
}
