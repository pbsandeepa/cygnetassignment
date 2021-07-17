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
            <b-dropdown-item href="#">Employee</b-dropdown-item>
            <b-dropdown-item href="#">Department</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/Profile">Sandeepa P B</b-nav-item>
        </b-navbar-nav>
      <!-- </b-collapse> -->
    </b-navbar>
    <div id="nav" align="center">
      <router-link to="/Employee">Employee</router-link> |
      <router-link to="/Department">Department</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
