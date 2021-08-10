 <template>
  <div>
     <Header />
   <form>
     <h1>Image </h1>
     <input v-model="imageurl" placeholder="Image url..." required />
     <h1>post title</h1>
      <input v-model="posttitle" placeholder="post Title" required />
      <h1>post body</h1>
      <textarea v-model="postbody" placeholder="post Body" required />
      <button type="submit" @click.prevent="send_post()">Submit Post</button>
    </form>
  </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
  export default {
    components:{Header},
    data:function() {
      return {
        
        posttitle: '',
        postbody:'',
        imageurl:'',
        
      }
    },
    methods:{
      send_post(){
         const postdata = {posttitle :this.posttitle , postbody : this.postbody,imageurl:this.imageurl ,active : true}; 
        axios.post("http://localhost:3000/users",postdata)
         
         
      }
    }
  }
</script>