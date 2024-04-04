import { Controller, Get, Inject,Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientProxy} from '@nestjs/microservices';
import { USER_SERVICE, COURSE_SERVICE } from 'src/common/name.constants';
import { Pattern } from 'src/common/message-pattern';



@Controller('course')
export class CourseController {
    constructor(
        @Inject(COURSE_SERVICE) private readonly courseclient: ClientProxy
        ) {}

    @Get()
    getCourse(): Observable<any> {
      const pattern = { cmd: Pattern.COURSES};
      return this.courseclient.send<any>(pattern, []);
    }

    @Get(':id')
    getCourseById(
        @Param('id') id: number
    ): Observable<any> {
        console.log(id, 'id');
      const pattern = { cmd: Pattern.COURSE};
      return this.courseclient.send<number>(pattern, id);
    }
    
}
