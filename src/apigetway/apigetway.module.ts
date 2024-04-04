import { Module } from '@nestjs/common';
import { CourseController } from './course/course.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user/user.controller';

@Module({
  controllers: [CourseController, UserController],
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
      },
    ]),
    ClientsModule.register([
      {
        name: 'COURSE_SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
})
export class ApigetwayModule {}
