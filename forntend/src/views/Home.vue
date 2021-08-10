<template>
  <div class="home">
    
    <b-row>
    <Cards  
   v-for="post in card_datas"
  v-bind:key="post.id"
  v-bind:post="post"/>
  
  
    </b-row>
    
   </div>
</template>

<script>


// @ is an alias to /src
 import Cards from '../components/Cards.vue'
import axios from 'axios'
 

 
  
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Cards,
  },data(){
    return{
        card_datas:[]
        
    }
  },created(){
      axios.get("http://localhost:3000/users").then((response)=>{
        this.card_datas = response.data;
        console.log(response.data);
      })
          
  }
  
}
     
</script>
