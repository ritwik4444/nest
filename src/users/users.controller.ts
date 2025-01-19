import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  HttpStatus,
  HttpException,
  ClassSerializerInterceptor,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  
  @Get('/:id/:optional?')
public getUsers(@Param('id') id: any, @Query('limit') limit: any): string{
  console. log(typeof id);
  console. log(typeof limit);
  return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUser( username : string, password : string ) : string{
    return 'You sent a post request to users endpoint';
  }
}

