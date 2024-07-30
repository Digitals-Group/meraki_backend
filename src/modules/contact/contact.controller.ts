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
import { ContactService } from './contact.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('contact')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() createContactDto: Prisma.ContactCreateArgs) {
    return this.contactService.create(createContactDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/list')
  findAll(@Body() body: Prisma.ContactFindManyArgs) {
    return this.contactService.findAll(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/read')
  findOne(@Body() body: Prisma.ContactFindUniqueArgs) {
    return this.contactService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateContactDto: Prisma.ContactUpdateArgs) {
    return this.contactService.update(updateContactDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.contactService.remove(id);
  }
}
