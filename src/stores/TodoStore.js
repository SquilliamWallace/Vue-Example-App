const TodoStore = {
  state: {
    todos: [],
    index: 0,
    title: "",
    userId: "",
    completed: true
  },
  deleteTodo: function () {
    this.state.todos.splice(this.state.index, 1);
  },
  createTodo: function (title, userId, done) {
    this.state.todos.push({title: title, userId: userId, done: done});
  },
  initialize: function () {
    this.listTodos()
  },
  listTodos: function () {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.state.todos = json
      })
  },
  editTodo: function (index) {
    alert("you sure you wanna change this jawn?");
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'PUT',
      body: JSON.stringify({
        title: 'foo',
        id: index,
        userId: 5,
        completed: true
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  },
  findTodo: function (userId) {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.state.todos = json
      })
  },
  createTodoApi: function () {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        userId: 1,
        completed: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))

  }
}
export default TodoStore
