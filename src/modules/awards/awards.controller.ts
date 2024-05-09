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
} from '@nestjs/common';
import { AwardsService } from './awards.service';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AwardEntity } from './entities/award.entity';
import { PaginationInterface } from 'src/common/interface';
import { PaginationPipe } from 'src/common/pipes/pagination.pipe';

@Controller('awards')
@ApiTags('Awards')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) {}

  @Post()
  create(@Body() createAwardDto: CreateAwardDto) {
    return this.awardsService.create(createAwardDto);
  }

  @Get()
  @ApiOkResponse({ type: AwardEntity, isArray: true })
  @ApiQuery({ name: 'take', type: Number, required: false })
  @ApiQuery({ name: 'skip', type: Number, required: false })
  @ApiQuery({ name: '', type: String, required: false })
  findAll(@Query(new PaginationPipe()) query: PaginationInterface) {
    return this.awardsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.awardsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateAwardDto: UpdateAwardDto,
  ) {
    return this.awardsService.update(id, updateAwardDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.awardsService.remove(id);
  }
}
