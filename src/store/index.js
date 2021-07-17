import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employees:[
      {
        id:1,
        name:"Sandeep",
        department:{
          id:1,
          name:"IT"
        }
      },
      {
        id:2,
        name:"Rajesh",
        department:{
          id:2,
          name:"Mechanical"
        }
      },
      {
        id:3,
        name:"Manohar",
        department:{
          id:3,
          name:"Sales"
        }
      },
      {
        id:4,
        name:"Dikshith",
        department:{
          id:4,
          name:"Marketing"
        }
      },
      {
        id:5,
        name:"Sudhir",
        department:{
          id:1,
          name:"IT"
        }
      }
    ],
    departments:[
      {
        id:1,
        name:"IT"
      },
      {
        id:2,
        name:"Mechanical"
      },
      {
        id:3,
        name:"Sales"
      },
      {
        id:4,
        name:"Marketing"
      },
      {
        id:5,
        name:"Support"
      }
    ]
  },
  mutations: {
    SET_EMPLOYEES(state, employees){
      state.employees = employees
    },
    SET_DEPARTMENTS(state, departments){
      state.departments = departments
    }
  },
  actions: {
  },
  modules: {
  }
})
