import { Controller} from '@nestjs/common';
import {MessagePattern } from '@nestjs/microservices';
import { Pattern } from 'src/common/message-pattern';

export interface User {
    id: number;
    name: string;
}

@Controller()
export class UserController {
  private readonly data:User[] = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
];
  constructor() {}

  @MessagePattern({ cmd: Pattern.USERS })
  getUser(): User[] {
    return this.data;
  }

  @MessagePattern({ cmd: Pattern.USER })
  getUserById(id: number): User {
    console.log(id, 'id');
    return this.data[1]
  }
}