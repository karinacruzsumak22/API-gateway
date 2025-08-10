
import { Controller, Get } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Controller('movies')
export class MoviesController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.NATS, 
      options: {
        host: 'localhost',
        port: 3001, 
      },
    });
  }

  @Get()
  async getMovies() {
    return this.client.send({ cmd: 'get-movies' }, {});
  }
}


