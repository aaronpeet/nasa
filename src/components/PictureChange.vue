<template>
  <div class="PictureChange row p-2 border bg-dark text-light rounded border-primary shadow-sm mt-2 text-left">
    <form @submit.prevent="changeActivePicture">
      <input v-model="state.query" type="date" name="" id="">
      <button>Search</button>
    </form>
  </div>
</template>


<script>
import { reactive, computed } from 'vue';
import {picturesService} from '../services/PicturesService'
import { AppState } from '../AppState'

export default {
  name: 'PictureChange',
  setup(){
const state = reactive({
query: ''
})

    return { 
      state,
      picture: computed(()=> AppState.activePicture),
      changeActivePicture(){
        picturesService.changeActivePicture(state.query)
      }
      }
  }
};
</script>