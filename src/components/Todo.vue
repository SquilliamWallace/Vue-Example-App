<template>
  <tr>
      <td>{{todo.title }}</td>
      <td>{{todo.userId}}</td>
      <td v-if="todo.completed === true">Yes</td>
      <td v-else>No</td>
      <td>
        <div v-if="this.store.state.editToggle===false" role="group">
          <button class='btn btn-warning' v-on:click="editSwap">
            <i class="fa fa-1x fa-edit"> Edit</i>
          </button>
          <button class='btn btn-danger' v-on:click="deleteTodo">
            <i class="fa fa-1x fa-trash"> Delete</i>
          </button>
        </div>
        <div v-else>
          <todo-creedit></todo-creedit>
          <span class="input-group-btn">
          <btn type="success" @click="editTodo(1)">
            <i class="fa fa-1x fa-save"> Save</i>
          </btn>
        </span>
        </div>
      </td>
  </tr>
</template>

<script>
  import TodoCreate from './TodoCreate'
  import TodoStore from "../stores/TodoStore";
  import TodoCreedit from './TodoCreedit'
  import BtnGroup from "uiv/src/components/button/BtnGroup";

    export default {
        name: "Todo",
      components:{
        BtnGroup,
        TodoCreate,
        TodoCreedit
      },
      props: {
          todo: {
            type: Object
          }
      },
      data(){
          return{
            store: TodoStore,
          }
      },
      methods: {
          deleteTodo: function(index){
            this.store.deleteTodo(index);
          },
          editTodo: function(index) {
            this.store.editTodo(index);
          },
          createTodoApi: function() {
            this.store.createTodoApi()
          },
          editSwap: function() {
            this.store.editSwap()
          }
        }
    }
</script>

<style scoped>

</style>
