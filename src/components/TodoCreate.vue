<template>
  <div>
    <div class="input-group header-input">
      <multi-select class="multi" v-model="selected" :options="options"/>
      <span class="input-group-btn">
          <btn type="primary" v-on:click="findTodo">
            <i class="fa fa-1x fa-search"> Search</i>
          </btn>
        </span>
      <span class="input-group-btn">
          <btn type="success" @click="open=true">
            <i class="fa fa-1x fa-plus-square"> Create</i>
          </btn>
        </span>
    </div>
    <modal v-model="open">
      <span slot="title"><i class="fa fa-check-square"></i> Add a Todo</span>
      <todo-creedit></todo-creedit>
      <div slot="footer">
        <btn @click="open=false">Close</btn>
        <btn type="primary" @click="createTodo">Create</btn>
      </div>
    </modal>
  </div>
</template>

<script>
  import TodoStore from "../stores/TodoStore";
  import {Btn} from 'uiv';
  import {Modal} from 'uiv';
  import {Popover} from 'uiv';
  import {Tooltip} from 'uiv';
  import TodoCreedit from './TodoCreedit'
  import {MultiSelect} from 'uiv'

  export default {
    name: "TodoCreate",
    components:{
      Btn,
      Modal,
      TodoCreedit,
      Tooltip,
      Popover,
      MultiSelect
    },
    data(){
      return{
        store: TodoStore,
        userId: "",
        selected: [],
        options: [
          {value:1, label:'User1'},
          {value:2, label:'User2'},
          {value:3, label:'User3'},
          {value:4, label:'User4'},
          {value:5, label:'User5'},
          {value:6, label:'User6'},
          {value:7, label:'User7'},
          {value:8, label:'User8'},
          {value:9, label:'User9'},
          {value:10, label:'User10'},
        ],
        open: false
      }
    },
    methods: {
      createTodo: function() {
        this.store.createTodo(this.title, this.userId, this.done);
        this.open=false;
      },
      findTodo: function() {
        this.store.findTodo(this.selected[0])
      },
      // getUserIds: function() {
      //     var tempTodo = []
      //     this.state.listTodos()
      //     for(var i=0;i<tempTodo.length; i++){
      //       tempTodo.push(this.state.todos[i].userId)
      //     }
      //     console.log(tempTodo)
      //     return tempTodo
      //   }
      }
  }

</script>

<style scoped>
  .header-input {
    position: fixed;
    padding-right: 175px;
  }
  .multi {
    min-width: 1085px;
    max-width: 1085px;
  }
</style>
