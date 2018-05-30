<template>
  <div>
      <div class="input-group-btn">
        <select class="form-control" style="min-width:750px;" v-model="userId">
          <option selected>Select a User ID</option>
          <option v-for="i in 10">{{i}}</option>
        </select>
        <btn type="primary" v-on:click="findTodo">
          <i class="fa fa-1x fa-search"> Search</i>
        </btn>
        <btn type="success" data-toggle="modal" data-target="#exampleModal">
        <i class="fa fa-1x fa-plus-square"> Create</i>
        </btn>
      </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">Create a Todo</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <todo-creedit></todo-creedit>
                </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="createTodo">Save changes</button>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
    import TodoStore from "../stores/TodoStore";
    import {Btn} from 'uiv';
    import {Modal} from 'uiv';
    import {Popover} from 'uiv';
    import {Tooltip} from 'uiv';
    import TodoCreedit from './TodoCreedit'

    export default {
        name: "TodoCreate",
      components:{
          Btn,
        Modal,
        TodoCreedit,
        Tooltip,
        Popover
      },
      data(){
          return{
            store: TodoStore,
            userId: ""
          }
      },
      methods: {
        createTodo: function() {
          this.store.createTodo(this.title, this.userId, this.done);
        },
        findTodo: function() {
          this.store.findTodo(this.userId)
        }
      }
    }

</script>

<style scoped>
  .input-group-btn {
    position: fixed;
  }
</style>
