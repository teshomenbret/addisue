import { Controller } from '@nestjs/common';
import {MessagePattern } from '@nestjs/microservices';
import { Pattern } from 'src/common/message-pattern';

export interface Course {
    id: number;
    name: string;
}


@Controller('course')
export class CourseController {

    private readonly data:Course[] = [
        { id: 1, name: 'Course 1' },
        { id: 2, name: 'Course 2' },
        { id: 3, name: 'Course 3' },
    ];
    constructor() {}

    @MessagePattern({ cmd: Pattern.COURSES })
    getCourse(): Course[] {
        return this.data;
    }

    @MessagePattern({ cmd: Pattern.COURSE })
    getCourseById(id: number): Course {
        return this.data[1]
    }

}
