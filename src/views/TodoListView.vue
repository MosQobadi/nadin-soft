<template>
  <TodoList />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoList from '@/components/TodoList.vue'

@Options({
  components: {
    TodoList
  },
})
export default class TodoListView extends Vue { }
</script>
