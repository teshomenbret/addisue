import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ApigetwayModule } from './apigetway/apigetway.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [ApigetwayModule,UserModule, CourseModule],
})
export class AppModule {}
