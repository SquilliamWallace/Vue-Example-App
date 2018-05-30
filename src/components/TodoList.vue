<template>
  <div>
    <div class="text-center">
      <span>Completed Tasks: {{completedTasks}}</span>
      <p>Amount To Do: {{notCompletedTasks}}</p>
    </div>
    <div v-if="this.store.state.todos.length === 0" class="text-center">
      <h1>No Results Found</h1>
    </div>
    <table v-else class="table table-bordered table-striped">
      <tr>
        <th>Title</th>
        <th>User Id</th>
        <th>Complete</th>
        <th></th>
      </tr>
      <todo v-for="todo in todos" :todo="todo" :key="todo.id"></todo>
    </table>
  </div>
</template>

<script>
  import Todo from './Todo'
  import TodoStore from "../stores/TodoStore";

    export default {
        name: "TodoList",
      data() {
        return {
          index: {
            type: Number
          },
          store: TodoStore,
        }
      },
      props: {
          todos: {
            type: Array
          }
      },
      components: {
          Todo
      },
      computed: {
          completedTasks: function() {
            return this.todos.filter(todo => {return todo.done}).length
          },
          notCompletedTasks: function() {
            return this.todos.filter(todo => {return !todo.done}).length
          }
      },
    }
</script>

<style scoped>

</style>
