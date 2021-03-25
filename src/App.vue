<template>
  
  <div id="app">
     <nav class="navbar">
        <router-link to="/"><a href="" class="navbar--link active">Blog</a></router-link>
        <router-link to="/about"><a href="" class="navbar--link">About</a></router-link> 
    </nav>
  <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 90vw;
  margin: 0 auto;
}
.navbar {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  &--link {
    display: flex;
    margin-left: 0.75rem;
    padding: 1rem 0;
    color: #39b54a;
  }
}
</style>
