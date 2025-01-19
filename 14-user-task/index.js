'use strict'

import {User} from './user.js'
import {Task} from './task.js'

const createTask = new Task();
const user = new User(createTask);

user.do()