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
import { TeamService } from './team.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { Prisma } from '@prisma/client';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTeamDto: Prisma.TeamCreateArgs) {
    return this.teamService.create(createTeamDto);
  }

  @Post('/list')
  findAll(@Body() body: Prisma.TeamCreateArgs) {
    return this.teamService.findAll(body);
  }

  @Post('/read')
  findOne(@Body() body: Prisma.TeamFindUniqueArgs) {
    return this.teamService.findOne(body);
  }

  @Patch(':id')
  update(@Body() updateTeamDto: Prisma.TeamUpdateArgs) {
    return this.teamService.update(updateTeamDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.teamService.remove(id);
  }
}
