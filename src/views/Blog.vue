<template>
  <div class="blog">
     <h1 class="headline center">
      <img alt="Wilmshurst_" src="../assets/logo.svg">
    </h1>
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>
<style lang="scss" scoped>
.blog {
  max-width: 60vw;
  margin: 0 auto;
  margin-top: 4rem;

  h1 {
  img {
  display: block;
  margin: 0 auto;
  width: 150px;
  z-index: 10;
  position: relative;
  }
}

  .back {
    background-color: #39b54a;
    color: white;
    margin-top: 5rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid currentColor;
    border-radius: .5rem;
    display: inline-block;
    transition: all .3s ease;
    &:hover {
      background-color: transparent;
      color: #39b54a;
    }
  }
  /deep/ {
    h1 {
      font-size: 3rem;
      margin-bottom: .2rem;
      color: #39b54a;
    }
    h4 {
      margin-bottom: 3rem;
      color: #38344d;
    }
    pre {
      overflow-x: auto;
      background-color: #38344d;
      color: #fff;
      border-radius: .3rem;
      padding: 1rem;
    }
    img {
      max-width: 100%;
    }
  }
}
</style>
