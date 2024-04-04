import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_SERVICE } from '../common/name.constants';
import { UserController } from './user.controller';

@Module({
  imports: [
    ClientsModule.register([{ name: USER_SERVICE, transport: Transport.TCP }]),
  ],
  controllers: [UserController],
})
export class UserModule {}
