<template>
<main>
  <div class="wrapper">
    <div class="todo-list">
      <TaskInput @onAddTask="addTask" ></TaskInput>
      <ul class ="task-list my-list">
        <li v-for="item in taskList" :key="item.id">
          <TaskCard @onRemove="removeTask(item.id)" @onDone="setDoneTask(item.id)" :model="item"></TaskCard>
        </li>
      </ul>
    </div>
  </div>
</main>
</template>

<script>
import TaskInput from './TaskInput.vue';
import TaskCard from './TaskCard.vue';
import { ref } from 'vue'

export default {
  name: 'ToDo',
  components: {
    TaskInput,
    TaskCard,
  },
  setup(){
    const taskList = ref([{id: 0, title: 'TestTask', status: false}])

    const addTask = ({title}) => {
      taskList.value = [...taskList.value, {id: taskList.value[taskList.value.length - 1].id + 1, title, status: false}]
    }

    const setDoneTask = (id) => {
      taskList.value = taskList.value.map(x =>{
        if(x.id === id)
          x.status = true
        return x
      })
    }

    const removeTask = (id) => {
      taskList.value = taskList.value.filter(x => x.id !== id)
    }

    return {
      taskList,
      addTask,
      removeTask,
      setDoneTask
    }
  }
}
</script>

<style scoped>

  .task-list {
    list-style: none;
    padding: 0;
  }

  .todo-list{
    background-color: rgba(111, 101, 179, 0.347);
    margin-top: 2px;
    width: auto;
    border-radius: 10px;
    padding: 20px
    
  }
</style>
