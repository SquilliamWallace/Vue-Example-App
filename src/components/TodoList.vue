<template>
  <div>
    <progress-widget></progress-widget>
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
  import ProgressWidget from './ProgressWidget'

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
        TodoCreedit,
        ProgressWidget
      }
    }
</script>

<style scoped>
.text-center{
  padding-top: 20px;
}
</style>
