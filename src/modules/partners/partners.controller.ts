import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { PartnersService } from './partners.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('partner')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Post()
  create(@Body() createPartnerDto: Prisma.PartnerCreateArgs) {
    return this.partnersService.create(createPartnerDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.PartnerFindManyArgs) {
    return this.partnersService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.PartnerFindUniqueArgs) {
    return this.partnersService.findOne(body);
  }

  @Patch('/update')
  update(@Body() updatePartnerDto: Prisma.PartnerUpdateArgs) {
    return this.partnersService.update(updatePartnerDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.partnersService.remove(id);
  }
}
