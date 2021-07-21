import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employees:localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [],
    departments:localStorage.getItem('departments') ? JSON.parse(localStorage.getItem('departments')) : [],
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
    addEmployee({commit, state}, This){
      state.employees.push({
        id:state.employees.length + 1,
        name:This.this.employeeName,
        email:This.this.email,
        phone:This.this.phone,
        department:This.this.department,
        address:This.this.address
      })

      
      console.log("employees",state.employees)
      localStorage.setItem('employees',JSON.stringify(state.employees))
      This.this.$refs.addEmployeeModal.hide()
      
    },
    addDepartment({commit, state}, This){
      state.departments.push({
        id:state.departments.length + 1,
        name:This.this.departmentName,
        description:This.this.departmentDescription,
      })

      console.log("departments",state.departments)
      localStorage.setItem('departments',JSON.stringify(state.departments))
      This.this.$refs.addDepartmentModal.hide()
      
    },
    updateDepartment({commit, state}, data){
      
      state.employees = state.employees.map(obj=>{
        if(obj.id == data.employee.id){
          obj.department = data.employee.department
        }
        return obj
      })
      console.log("employees",state.departments)
      localStorage.setItem('employees',JSON.stringify(state.employees))
      
    }
  },
  modules: {
  }
})
