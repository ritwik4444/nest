import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Get('interns')
  findAllInterns() {
    return [];
  }

  @Post()
  create(@Body() user: { }) {
    // eslint-disable-next-line prettier/prettier
    return user
  }

  @Patch(':id')
  findOne(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  
}
