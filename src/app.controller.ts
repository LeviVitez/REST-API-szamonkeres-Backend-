import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import TortaData from './TortaData.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }
  @Get('TortaData')
  async tortaLista() {
    const TortaRepo = this.dataSource.getRepository(TortaData);
    return await TortaRepo.find();
  }

  @Delete('TortaData/:id')
  async deleteTorta(@Param('id') id: number) {
    const TortaRepo = this.dataSource.getRepository(TortaData);
    TortaRepo.delete(id);
  }

  @Post('TortaData')
  async createTorta(@Body() Torta: TortaData) {
    Torta.id = undefined;
    const TortaRepo = this.dataSource.getRepository(TortaData);
    TortaRepo.save(Torta);
  }
}
