<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Dictionary</router-link> |
      <router-link to="/thesaurus">Thesaurus</router-link> | 
      <router-link to="/translate">Translate</router-link>
    </div>
    <router-view />
    <div class="footer background-color-primary">
      View the code for this project on <a href="https://github.com/CraightonH/creative-project-3">GitHub</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.footer {
    text-align: center;
    padding: 50px 0px;
    margin-top: 50px;
    font-weight: 600;
    color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.background-color-primary {
  background-color: #42b983;
}

.container {
  display: flex;
  justify-content: center;
}

.button {
  border-radius: 10px;
  color: white;
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
