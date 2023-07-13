import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './item.model';
import { ItemsService } from './items.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id') //items/:id
  findById(@Param('id', ParseUUIDPipe) id: string): Item {
    const found = this.itemsService.findById(id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  @Post()
  create(
    // expressの req.body.idが @Body('id')
    @Body() createItemDto: CreateItemDto,
  ): Item {
    return this.itemsService.create(createItemDto);
  }

  @Patch(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string) {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    this.itemsService.delete(id);
  }
}
