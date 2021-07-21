<template>
  <div class="p-5 row">
    <div class="col-lg-3 col-md-3 col-sm-1 col-xs-1"></div>
    <div class="col-lg-6 col-md-6 col-sm-10 col-xs-10" align="center">
      <b-card
        :title="employe.name"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
       
      >
        <b-card-text  align="left">
          <b>Email:</b> {{employe.email}}
        </b-card-text>
        <b-card-text  align="left">
          <b>Phone:</b> {{employe.phone}}
        </b-card-text>
        <b-card-text  align="left">
          <b>Department:</b> {{department(employe.department).name}}
        </b-card-text>
        <b-card-text  align="left">
          <b>Address:</b> {{employe.address}}
        </b-card-text>

        
      </b-card>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-1 col-xs-1"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data(){
    return{
      
    }
  },
  computed:{
    ...mapState({
      employees:"employees",
      departments:"departments"
    }),
    employe(){
      const that = this
      return that.employees.find((obj)=>{
        return obj.id == that.$route.query.eid
      })
    }
    
  },
  methods:{
    department(id){
      const that = this
      return that.departments.find((obj)=>{
        return obj.id == id
      })
    }
  }
  
}
</script>