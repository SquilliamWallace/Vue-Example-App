<template>
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
</template>

<script>
  import TodoStore from "../stores/TodoStore";
    export default {
        name: "TodoCreedit",
      data() {
        return {
          title: "",
          userId: "",
          done: true,
          store: TodoStore
        }
      }
    }

</script>

<style scoped>

</style>
