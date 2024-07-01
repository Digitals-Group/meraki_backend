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

@Controller('roles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRoleDto: Prisma.RolesCreateArgs) {
    return this.rolesService.create(createRoleDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.RolesFindManyArgs) {
    return this.rolesService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.RolesFindUniqueArgs) {
    return this.rolesService.findOne(body);
  }

  @Patch('/update')
  update(@Body() updateRoleDto: Prisma.RolesUpdateArgs) {
    return this.rolesService.update(updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.rolesService.remove(id);
  }
}
