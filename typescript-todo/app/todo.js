var Todo = /** @class */ (function () {
    function Todo(name, description, completed) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
    return Todo;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
    }
    TodoList.prototype.createTodoItem = function (name, description) {
        var newItem = new Todo(name, description, false);
        var totalCount = TodoList.allTodos.push(newItem);
        return totalCount;
    };
    TodoList.prototype.renderTodo = function () {
        var html = '';
        var container = document.getElementById('list');
        TodoList.allTodos.forEach(function (item) {
            html += "<li><input type=\"checkbox\" name=\"\" id=\"\">/name: " + item.name + "; description: " + item.description + "</li>";
        });
        container.innerHTML = html;
    };
    TodoList.prototype.allTodoItems = function () {
        return TodoList.allTodos;
    };
    TodoList.allTodos = new Array;
    return TodoList;
}());
window.onload = function () {
    var name = document.getElementById('todoName');
    var description = document.getElementById('todoDescription');
    var list = new TodoList();
    document.getElementById('add').addEventListener('click', function () {
        list.createTodoItem(name.value, description.value);
        console.log(list.allTodoItems());
        list.renderTodo();
    });
};
