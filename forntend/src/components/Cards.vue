  

<template>
    <div>
                
         <b-col col sm>
        <b-card
      :img-src="post.imageurl"
    tag="article"
    style="width: 18rem;margin: 0.5rem;"
    class="mb-2"
  >    

  <b-card-title>{{post.posttitle}}</b-card-title>

    <b-card-text>
      {{post.postbody.slice(0, 25)+ '  ......'}}
    </b-card-text>
 <router-link :to="'/Newspage/' + post.id">
    <b-button   variant="primary" class="mr-sm-2">Open </b-button>
 </router-link>
      <!-- <b-button  variant="primary"> {{post.price}}  </b-button> -->
  </b-card>
         </b-col>
     </div>
</template>

<script>
import Newspage from '@/components/Newspage.vue'
 export default {
    name:'Cards',
    component: {Newspage},
        props: ['post'],
    
}
</script>