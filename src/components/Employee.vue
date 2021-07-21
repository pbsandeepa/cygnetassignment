<template>
<div class="row">
  <div class="col-lg-4 col-md-4 col-sm-1 col-xs-1"></div>
  <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10">
    <div class="p-3" align="center"><b>Employee</b></div>
    <Item :item="employee" v-for="employee in employees" :key="employee.id"/>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-1 col-xs-1"></div>
</div>
  
</template>
<script>
import { mapState } from "vuex";
import Item from './Item.vue'
export default {
  created(){
    
  },
  components:{
    Item
  },
  computed:{
    ...mapState({
      employees:"employees"
    }),
  },
  data(){
    return{
    }
  },
  methods:{
    
    
  }
}
</script>
