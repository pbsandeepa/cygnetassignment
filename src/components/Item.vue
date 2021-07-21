<template>
  <b-card class="mb-2" >
    <b-card-text v-b-toggle="string(item.id)">{{item.name}}</b-card-text>
    <b-collapse :id="string(item.id)" class="mt-2">
      <b-card>
        <p class="card-text">Name: {{item.name}}</p>
        <div class="card-text row" v-if="item.department">
          <div class="col-4"> Department: </div>
          <div class="col-8">
            <b-form-select class="form-control form-control-sm" v-model="item.department" :options="departmentsOptions" @input="updateDepartment(item)"></b-form-select>
          </div>
        </div>
        <div class="card-text row" v-if="item.description">
          <div class="col-4"> Description: </div>
          <div class="col-8">{{item.description}}</div>
        </div>
      </b-card>
    </b-collapse>
  </b-card>
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
      departments:"departments"
    }),
    departmentsOptions(){
      return this.departments.map((obj)=>{
        return{
          text:obj.name,
          value:obj.id
        }
      })
    }
  },
  props:['item'],
  methods:{
    string(val){
      return val.toString()
    },
    updateDepartment(val){
      console.log("VAL",val)
      this.$store.dispatch("updateDepartment", {employee:val})
    }
  }
}
</script>
<style lang="scss" scoped>


</style>