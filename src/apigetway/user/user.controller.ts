import { Controller, Get, Inject,Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientProxy} from '@nestjs/microservices';
import { USER_SERVICE, COURSE_SERVICE } from 'src/common/name.constants';
import { Pattern } from 'src/common/message-pattern';

@Controller('user')
export class UserController {
    constructor(
        @Inject(USER_SERVICE) private readonly userclient: ClientProxy
        ) {}

    @Get()
    getUser(): Observable<any> {
      const pattern = { cmd: Pattern.USERS};
      return this.userclient.send<any>(pattern, []);
    }

    @Get(':id')
    getUserById(
        @Param('id') id: number
    ): Observable<any> {
        console.log(id, 'id');
      const pattern = { cmd: Pattern.USER};
      return this.userclient.send<number>(pattern, id);
    }
}
