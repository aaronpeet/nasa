<template>
  <div class="PicturesCurrent row border border-secondary rounded p-2 mt-2">
    <h2 class="col-12">{{picture.title}}</h2>
    <div class="col-6">
      <img :src="picture.imgUrl" alt="" srcset="" class="img-fluid">
    </div>
    <div class="col-6">{{picture.explanation}}</div>
  </div>
</template>


<script>
import { computed, onMounted, reactive } from 'vue';
import { picturesService } from '../services/PicturesService'
import { AppState } from '../AppState'
export default {
  name: 'PicturesCurrent',
  setup(){
const state = reactive({

})
onMounted(()=> {
    picturesService.getPicture()
})
    return { 
    state,
    picture: computed(()=> AppState.activePicture),
    getPicture(){
       picturesService.getPicture()
   }
    }
  }
};
</script>


<style scoped>
</style>