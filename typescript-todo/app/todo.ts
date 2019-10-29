interface ITode{
    name: string,
    description: string,
    completed: boolean
}
class Todo implements ITode {
    constructor(public name:string, public description:string, public completed:boolean) {

    }
}

class TodoList {
    public static allTodos: Todo[] = new Array;
    createTodoItem(name:string, description:string):number {
        let newItem = new Todo(name, description, false);
        let totalCount: number = TodoList.allTodos.push(newItem);
        return totalCount;
    }
    renderTodo(): void {
        let html = '';
        let container = <HTMLElement>document.getElementById('list');
        TodoList.allTodos.forEach((item: Todo) => {
            html += `<li><input type="checkbox" name="" id="">/name: ${item.name}; description: ${item.description}</li>`
        })
        container.innerHTML = html;
    }
    allTodoItems():Todo[] {
        return TodoList.allTodos;
    }
}

window.onload = () => {
    let name = <HTMLInputElement>document.getElementById('todoName');
    let description = <HTMLInputElement>document.getElementById('todoDescription');
    let list = new TodoList();
    document.getElementById('add').addEventListener('click', () => {
        list.createTodoItem(name.value, description.value);
        list.renderTodo();
    })

}