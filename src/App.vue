<template>
  <div class="app">
    <div class="panel panel-primary">
        <div class="panel-heading">
          <div class="panel-title">
            Stuff You Need to Get Done
          </div>
        </div>
        <div class="panel-body">
          <todo-create></todo-create>
          <todo-list :todos="this.store.state.todos"></todo-list>
        </div>
      </div>
    </div>
</template>

<script>
import TodoList from './components/TodoList'
import TodoStore from './stores/TodoStore'
import TodoCreate from './components/TodoCreate'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoCreate
  },
  data() {
    return {
      store: TodoStore
      }
    },
    mounted: function() {
      this.store.initialize();
    }
};
</script>

<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-right: 150px;
  background-color: white;
}
</style>
