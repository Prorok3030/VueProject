<template>
    <div class="my-list">
        <input v-model="title" placeholder="Название задачи" type="text">
        <button class="btn-input" @click="OnAddTask">Добавить</button>
    </div>
</template>
  
<script>
import { ref } from "vue"

export default {
    emits:{
        OnAddTask({title}){
            if(title === ''){
                alert('Поле не может быть пустым')
                return false
            }
            return true
        }
    },
    setup(props, { emit }){
        const title = ref('')

        const OnAddTask = () =>{
            emit('OnAddTask', {title: title.value})
        }

        return {
            title,
            OnAddTask
        }
    }
  }
</script>

<style scoped>
    .task-input {
        margin: 10px 0;
    }

    .btn-input{
        background-color: rgb(247, 109, 97);
        color: #ffff;
        margin-bottom: 10px;
        border-radius: 10px;
    }
</style>
  