  

<template>
    <div>
                
         <b-col col sm>
        <b-card
      :img-src="sidecard_data.imageurl"
    tag="article"
    style="width: 18rem;margin: 0.5rem;"
    class="mb-2"
  >    

  <b-card-title>{{sidecard_data.posttitle}}</b-card-title>

    <b-card-text>
      {{sidecard_data.postbody.slice(0, 25)+ '  ......'}}
    </b-card-text>
 <router-link :to="'/Newspage/' + sidecard_data.id">
    <b-button   variant="primary" class="mr-sm-2">Open </b-button>
 </router-link>
   </b-card>
         </b-col>
     </div>
</template>

<script>
import Newspage from '@/components/Newspage.vue'
 export default {
    name:'Sidecard',
    component: {Newspage},
        props: ['sidecard_data'],
        data(){
           
          } 

          
        }
    

</script>