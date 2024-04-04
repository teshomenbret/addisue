import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { COURSE_SERVICE } from '../common/name.constants';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: COURSE_SERVICE,
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [CourseController]
})
export class CourseModule {}
