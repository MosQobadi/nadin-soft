<template>
  <div>
    <form @submit="addTask">
      <h1>{{ $t('todo_list') }}</h1>
      <div class="form-group">
        <a-input type="text" v-model:value="newTask" :placeholder="$t('placeholders.add_todo')" />
        <a-button @click="addTask">{{ $t('buttons.add') }}</a-button>
      </div>
      <ul class="todo-list">
        <li class="todo-item" v-for="( task, index ) in  tasks " :key="index">
          {{ task.text }}
          <a-button @click="removeTask(index)">Remove</a-button>
        </li>
      </ul>
    </form>

  </div>
</template>

<script>
import { Button } from 'ant-design-vue';

const ButtonGroup = Button.Group;



export default {
  components: {
    AButton: Button,
    AButtonGroup: ButtonGroup,
  },
  name: 'TodoList',
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  mounted() {
    this.loadTasks();
  },
  watch: {
    tasks: {
      handler: 'saveTasks',
      deep: true,
    },
  },
  methods: {
    addTask(e) {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask });
        this.newTask = '';
      }

      e.preventDefault()
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    loadTasks() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks);
      }
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
  },
};
</script>

<style scoped>
.form-group {
  display: flex;
}

.todo-list {
  margin-top: 20px;
}

.todo-item {
  list-style: none;
  margin-top: 10px;
}
</style>
