import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesServer} from './movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesServer],
})
export class moviesModule {}
