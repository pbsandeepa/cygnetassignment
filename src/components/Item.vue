<template>
  <b-card class="mb-2" >
    <b-card-text v-b-toggle="string(item.id)">{{item.name}}</b-card-text>
    <b-collapse :id="string(item.id)" class="mt-2">
      <b-card>
        <p class="card-text">Name: {{item.name}}</p>
        <p class="card-text" v-if="item.department">
          Department: <b-form-select v-model="item.department.id" :options="departmentsOptions"></b-form-select>
        </p>
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
    selectedDepartment1(val){
      return {
        text:val.name,
        value:val.id
      }
    }
  }
}
</script>
<style lang="scss" scoped>


</style>