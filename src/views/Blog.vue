<template>
  <div class="blog wrap">
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>

<style lang="scss" scoped>

$white: #FFFFFF;
$black: #2A263D;
$green: #39b54a;
$grey: #38344d;

.blog {
  .back {
    background-color: transparent;
    color: $green;
    margin-top: 2rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid currentColor;
    display: inline-block;
    transition: all .3s ease;
    &:hover {
      background-color: $green;
      color: #fff;
    }
  }
  h2 {
      color: $green;
      font-weight: 900;
      font-size: 2rem;
    }
  }

</style>
