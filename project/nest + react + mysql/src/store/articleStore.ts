import { makeAutoObservable } from 'mobx';

interface Todo {
  done: boolean
}

class ArticleStore {
  todos: Todo[] = []
  constructor() {
    makeAutoObservable(this)
  }
  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
}

export default new ArticleStore()