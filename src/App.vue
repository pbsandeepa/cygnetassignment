<template>
  <div id="app">
    <b-navbar type="dark" variant="primary">
      <b-navbar-brand href="#">Cygnet Infotech</b-navbar-brand>
      <!-- <b-collapse id="nav-collapse" is-nav> -->
        <b-navbar-nav class="b-ml-auto">
          
          <b-nav-item-dropdown left>
            <template #button-content>
              <b>Add</b>
            </template>
            <b-dropdown-item 
              href="#" 
              v-if="$route.name == 'Employee'"
              @click="showAddEmployeeModal"
            >Employee
            </b-dropdown-item>
            <b-dropdown-item 
              href="#" 
              v-if="$route.name == 'Department'"
              @click="showAddDepartmentModal"
            >Department
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item>Sandeepa P B</b-nav-item>
        </b-navbar-nav>
      <!-- </b-collapse> -->
    </b-navbar>
    <div id="nav" align="center">
      <router-link to="/Employee">Employee</router-link> |
      <router-link to="/Department">Department</router-link>
    </div>
    <router-view/>

    <b-modal ref="addEmployeeModal" hide-footer title="Add Employee">
      <div class="">
        <b-form-input class="mb-3" size="sm" v-model="employeeName" placeholder="Employee Name"></b-form-input>
        <b-form-input class="mb-3" size="sm" v-model="email" placeholder="Email"></b-form-input>
        <b-form-input class="mb-3" size="sm" v-model="phone" placeholder="Phone"></b-form-input>
        <b-form-select class="mb-3 form-control form-control-sm" size="sm" v-model="department" :options="departmentsOptions" placeholder="Department"></b-form-select>
        <b-form-textarea
          v-model="address"
          placeholder="Address"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </div>
      <div align="right">
        <b-button class="mt-3" variant="outline-primary" block @click="addEmployee">Add</b-button>
      </div>
    </b-modal>
    <b-modal ref="addDepartmentModal" hide-footer title="Add Department">
      <div class="">
        <b-form-input class="mb-3" size="sm" v-model="departmentName" placeholder="Department Name"></b-form-input>
        <b-form-textarea
          v-model="departmentDescription"
          placeholder="Description"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </div>
      <div align="right">
        <b-button class="mt-3" variant="outline-primary" block @click="addDepartment">Add</b-button>
      </div>
    </b-modal>

  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed:{
    ...mapState({
      departments:"departments"
    }),
    departmentsOptions(){
      var departments = this.departments.map((obj)=>{
        return{
          text:obj.name,
          value:obj.id
        }
      })
      departments.unshift({
        value:null,
        text:'Select Department'
      })
      return departments
    }
  },
  data(){
    return{
      employeeName:"",
      email:"",
      phone:"",
      department:null,
      address:"",
      departmentName:"",
      departmentDescription:""
    }
  },
  methods:{
    showAddEmployeeModal(){
      this.employeeName = ""
      this.email = ""
      this.phone = ""
      this.department = null
      this.address = ""
      this.$refs.addEmployeeModal.show()
    },
    showAddDepartmentModal(){
      this.departmentName = ""
      this.departmentDescription = ""
      this.$refs.addDepartmentModal.show()
      
    },
    addEmployee(){
      if(this.employeeName.trim() != "" && this.department){
        this.$store.dispatch("addEmployee", {this:this})
      }else{
        alert('Employee Name and Department Required!')
      }
    },
    addDepartment(){
      if(this.departmentName.trim() != ""){
        this.$store.dispatch("addDepartment", {this:this})
      }else{
        alert('Department Name Required!')
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navbar-expand {
  justify-content: space-between !important;
}
.dropdown-menu{
  right:0px;
}
</style>
