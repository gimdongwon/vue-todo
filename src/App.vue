<template>
  <div class="container">
    <div class="col-md-6 offset-md-3">
      <h1 class="text-center mb-4">Todo Application with Vue</h1>
      <input
        type="text"
        class="form-control mb-4"
        v-model="userInput"
        @keyup.enter="submit"
      />
      <button class="form-action" @click="submit">할일 추가</button>
    </div>
    <div class="todoList">
      <ul class="list-group">
        <template v-for="item in activeTodoList" v-bind:key="item">
          <todo :label="item.label" @componentClick="toggleTodoState(item)" />
        </template>
      </ul>
    </div>
    <div class="text-right">
      <button
        class="btn btn-sm"
        type="button"
        @click="changeCurrentState('active')"
      >
        할일
      </button>
      <button
        class="btn btn-sm"
        type="button"
        @click="changeCurrentState('done')"
      >
        완료
      </button>
      <button
        class="btn btn-sm"
        type="button"
        @click="changeCurrentState('all')"
      >
        전체
      </button>
    </div>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
export default {
  name: "App",
  data() {
    return {
      userInput: "",
      todoList: [],
      currentState: "active",
    };
  },
  computed: {
    // class의 getter 함수처럼 동작함.
    activeTodoList() {
      return this.todoList.filter(
        (todo) =>
          this.currentState === "all" || todo.state === this.currentState
      );
    },
  },
  methods: {
    changeCurrentState(state) {
      this.currentState = state;
    },
    submit() {
      this.todoList.push({
        label: this.userInput,
        state: "active",
      });
      this.userInput = "";
    },
    toggleTodoState(todo) {
      if (todo.state === "active") {
        todo.state = "done";
      } else {
        todo.state = "active";
      }
    },
  },
  components: {
    Todo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
