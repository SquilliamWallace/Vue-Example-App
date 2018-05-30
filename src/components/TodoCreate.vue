<template>
  <div>
      <!--<input type="text" class="form-control" placeholder="Search for a Todo:" aria-label="Todo" v-model="title">-->
      <!--<div class="input-group-addon">-->
        <!--<input id="compSCheck" type="checkbox" aria-label="Already Completed?" v-model="done">-->
      <!--</div>-->
      <div class="input-group-btn">
        <select class="form-control" style="min-width:150px;" v-model="userId">
          <option selected>Select a User ID</option>
          <option v-for="i in 10">{{i}}</option>
        </select>
        <btn type="primary" v-on:click="findTodo">
          <i class="fa fa-1x fa-search"> Search</i>
        </btn>
        <btn type="success"  data-toggle="modal"  data-target="#exampleModal">
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
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Todo:" aria-label="Todo" v-model="title">
                  <div class="input-group-addon">
                    <input id="compCheck" type="checkbox" aria-label="Already Completed?" v-model="done">
                  </div>
                  <div class="input-group-btn">
                    <select class="form-control" style="min-width:150px;" v-model="userId">
                      <option selected>Select a User ID</option>
                      <option v-for="i in 10">{{i}}</option>
                    </select>
              </div>
                </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="createTodo">Save changes</button>
              </div>
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

    export default {
        name: "TodoCreate",
      components:{
          Btn,
        Modal
      },
      methods: {
        createTodo: function() {
          this.store.createTodo(this.title, this.userId, this.done);
        },
        findTodo: function() {
          this.store.findTodo(this.userId)
        }
      },
      data() {
        return {
          title: "No Title",
          userId: "No Id Selected",
          done: true,
          store: TodoStore
        }
      }
    }

</script>

<style scoped>

</style>
