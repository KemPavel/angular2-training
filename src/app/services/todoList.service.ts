import { Injectable } from '@angular/core';

import { ITodoItem } from '../components/todos/todo/todoItem.component.d';

const todos: ITodoItem[] = [
  {
    id: 0,
    title: 'Todo_1',
    date: '2017-09-27',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 90,
    topRated: true
  },
  {
    id: 1,
    title: 'Todo_2',
    date: '2017-11-19',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 750
  },
  {
    id: 2,
    title: 'Todo_3',
    date: '2017-10-04',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, vitae id nam sit fuga magni. Deserunt sint aspernatur, adipisci totam in quisquam laborum accusantium assumenda repellendus optio! Qui, vitae, nostrum.',
    duration: 30
  },
];

@Injectable()

export class TodoListService {
  getTodos(): ITodoItem[] {
    return todos;
  };

  getTodoById(id: number): ITodoItem {
    return todos.find(todo => todo.id === id);
  };

  createTodo(): void {
  };

  updateTodo(): void {

  };

  deleteTodo(id: number): void {
    todos.splice(todos.findIndex(todo => todo.id === id), 1);
  };

}
