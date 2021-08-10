<template>
    <div>
      <b-container fluid="sm"> 
          <b-row> 
        <b-col> 
      <div class="text-left" style="margin-top:1rem;margin-bottom:3rem"> 
         <h1>{{route_data.posttitle}}  </h1>
          
      
  
   <img v-bind:src="route_data.imageurl" style="width:40rem" alt="">
    
   </div>
   <div style="width:40rem;margin-bottom:5rem " class="text-left"> 
    
  
        <!-- <h1>{{route_data.imageurl}}</h1> -->
        <!-- style="text-align:center" -->
        
        <p >{{route_data.postbody}}</p>
        
  </div>
  </b-col>
   
  <b-col class="text-right" > 
    
  <div class="text-right" style="margin-top:1rem;margin-bottom:3rem"><h1> HelloWorld</h1>
  </div>
  <b-container style="width:5rem"> 
    <b-row> 
       
  <Sidecard 
  v-for="sidecard_data in sidecard_datas"
  v-bind:key="sidecard_data.id"
  v-bind:sidecard_data="sidecard_data" />
  </b-row>
  </b-container>
  </b-col>
  </b-row>
  </b-container>
    </div>
</template>

<script>
import Sidecard from './Sidecard.vue'
import axios from 'axios'
export default {
name:'Newspage',
components:{Sidecard,},
 
data(){
  return {
//  routeid : this.$route.params.id
route_data :[],
sidecard_datas : [],
 

 }
},created(){
 var routeid = this.$route.params.id
      axios.get('http://localhost:3000/users/'+routeid).then((response)=>{
        this.route_data = response.data;
        console.log(response.data);
      })
  axios.get('http://localhost:3000/users').then((response)=>{
    this.sidecard_datas = response.data;
    console.log(response.data)
  })
          
  } 
  

}
</script>