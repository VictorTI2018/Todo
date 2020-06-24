import { Tasks, NewTask } from '../views/tasks'
import { EditUser } from '../views/user'

export const router = [
    {
        path: '/',
        component: Tasks,
        exact: true
    },
    {
        path: '/new-task',
        component: NewTask,
        exact: true
    },
    {
        path: '/edit-user/:id',
        component: EditUser,
        exact: true
    }
]