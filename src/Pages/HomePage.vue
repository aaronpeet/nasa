<template>
  <div class="component container-fluid">
    <div class="row ">
      <div class="col-12 bg-primary text-light">
    <img class="img-fluid mt-2" alt="Vue logo" src="https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hc2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"><h1>NASA</h1>
      </div>
      <div class="col-md-8">
          <PictureChange/>
      </div>
      <div class="col-md-8">
        <PicturesCurrent/>
      </div>
    </div>

  </div>
</template>

<script>
import {  reactive } from 'vue';
import PicturesCurrent from '../components/PicturesCurrent.vue'
import PictureChange from '../components/PictureChange.vue'
export default {
  name: 'HomePage',
  setup(){
const state = reactive({
})
    return { state }
  },
  components: {PicturesCurrent, PictureChange}
};
</script>


<style scoped>
.img-fluid{
  height: 20vh;
}
</style>