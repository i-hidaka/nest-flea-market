import { ItemsService } from './items.service';
import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  constructor(private readonly ItemsService: ItemsService) {}
  @Get()
  findAll() {
    return this.ItemsService.findAll();
  }
}
