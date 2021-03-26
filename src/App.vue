<template>
  
  <div id="app">
     <nav class="navbar">
        <router-link to="/"><a href="" class="navbar--link active">Blog</a></router-link>
        <router-link to="/about"><a href="" class="navbar--link">About</a></router-link> 
        <a href="./docs/peter-wilmshurst.pdf" target="_blank" title="Peter Wilmshurst CV" class="navbar--link">CV</a>
    </nav>

     <h1 class="center">
      <img alt="Wilmshurst_" src="./assets/logo.svg">
    </h1>

  <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #38344d;
  margin: 0 auto;
}
.navbar {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  &--link {
    display: flex;
    margin-left: 0.75rem;
    color: #39b54a;
  }
}
.center {
  text-align: center;
}
h1 {
  img {
  display: block;
  margin: 0 auto;
  width: 150px;
  z-index: 10;
  position: relative;
  }
}
.wrap {
  max-width: 90vw;
  margin: 0 auto;
  margin-top: 4rem;
}

@media only screen and (min-width: 768px) {
  .wrap {
  max-width: 60vw;
}
}

</style>
