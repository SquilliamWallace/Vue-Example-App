<template>
  <div>
    <div class="prog">
      <h4>Completed Tasks:</h4>
      <progress-bar type="success" striped active v-model="completedTasks" label></progress-bar>
      <h4>Incomplete Tasks:</h4>
      <progress-bar type="danger" striped active v-model="notCompletedTasks" label></progress-bar>
    </div>
    <div v-if="this.store.state.todos.length === 0" class="text-center">
      <h1>No Results Found</h1>
    </div>
    <table v-else class="table table-bordered table-striped text-center">
      <tr>
        <th class="text-center">Title</th>
        <th class="text-center">User Id</th>
        <th  class="text-center">Complete</th>
        <th class="text-center">Actions</th>
      </tr>
      <tbody class="bod">
        <todo v-for="(todo, idx) in todos" :todo="todo" :key=idx></todo>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Todo from './Todo'
  import TodoStore from "../stores/TodoStore";
  import TodoCreedit from './TodoCreedit'
  import ProgressBar from 'uiv/src/components/progressbar/ProgressBar'

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
        Todo,
        ProgressBar,
        TodoCreedit
      },
      computed: {
          completedTasks: function() {
            let progress = this.store.state.todos.filter(todo => {return todo.completed}).length
            return Math.round((progress/this.store.state.todos.length)*100);
          },
          notCompletedTasks: function() {
            let notProgress = this.store.state.todos.filter(todo => {return !todo.completed}).length
            return Math.round((notProgress/this.store.state.todos.length)*100);
          }
      },
    }
</script>

<style scoped>
.prog{
  text-align: center;
  padding-top: 50px;
}
.text-center{
  padding-top: 20px;
}
</style>
