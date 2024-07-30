import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { RolesService } from './roles.service';

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('role')
@ApiTags('Roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRoleDto: Prisma.RoleCreateArgs) {
    return this.rolesService.create(createRoleDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.RoleFindManyArgs) {
    return this.rolesService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.RoleFindUniqueArgs) {
    return this.rolesService.findOne(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/update')
  update(@Body() updateRoleDto: Prisma.RoleUpdateArgs) {
    return this.rolesService.update(updateRoleDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.rolesService.remove(id);
  }
}
