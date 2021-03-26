<template>
  <div class="blog wrap">
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>

<style lang="scss" scoped>
.blog {
  .back {
    background-color: transparent;
    color: #39b54a;
    margin-top: 2rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid currentColor;
    display: inline-block;
    transition: all .3s ease;
    &:hover {
      background-color: #39b54a;
      color: #fff;
    }
  }
  h2 {
      color: #39b54a;
      font-weight: 900;
      font-size: 2rem;
    }
  }

</style>
