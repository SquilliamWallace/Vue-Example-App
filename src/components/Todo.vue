<template>
  <tr>
      <td>{{todo.title }}</td>
      <td>{{todo.userId}}</td>
      <td v-if="todo.completed === true">Yes</td>
      <td v-else>No</td>
      <td>
        <div role="group">
          <button class='btn btn-warning' v-on:click="editTodo">
            <i class="fa fa-1x fa-edit"> Edit</i>
          </button>
          <button class='btn btn-danger' v-on:click="deleteTodo">
            <i class="fa fa-1x fa-trash"> Delete</i>
          </button>
      </div>
      </td>
  </tr>
</template>

<script>
  import TodoCreate from './TodoCreate'
  import TodoStore from "../stores/TodoStore";
  import BtnGroup from "uiv/src/components/button/BtnGroup";

    export default {
        name: "Todo",
      components:{
        BtnGroup,
          TodoCreate
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
          }
        }
    }
</script>

<style scoped>

</style>
