import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('user')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createUserDto: Prisma.UserCreateArgs) {
    return this.usersService.create(createUserDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.UserFindManyArgs) {
    return this.usersService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.UserFindUniqueArgs) {
    return this.usersService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateUserDto: Prisma.UserUpdateArgs) {
    return this.usersService.update(updateUserDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.remove(id);
  }
}
