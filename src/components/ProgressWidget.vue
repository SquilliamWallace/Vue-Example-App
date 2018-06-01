<template>
  <div class="prog">
    <h4>Completed Tasks:</h4>
    <progress-bar type="success" striped active v-model="completedTasks" label></progress-bar>
    <h4>Incomplete Tasks:</h4>
    <progress-bar type="danger" striped active v-model="notCompletedTasks" label></progress-bar>
  </div>
</template>

<script>
  import TodoStore from "../stores/TodoStore";
  import ProgressBar from 'uiv/src/components/progressbar/ProgressBar';

    export default {
        name: "ProgressWidget",
      data(){
          return{
            store: TodoStore,
          }
      },
      components: {
        ProgressBar
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
      }
    }
</script>

<style scoped>
  .prog{
    text-align: center;
    padding-top: 50px;
  }
</style>
