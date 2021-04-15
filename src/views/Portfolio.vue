<template>
  <div class="portfolio"> 
    <ul>
      <li><img src="../assets/portfolio_the-dinner-table.jpg" alt="The Dinner Table"></li>
      <li><img src="../assets/portfolio_teepee-emporium.jpg" alt="Teepee Emporium"></li>
      <li><img src="../assets/portfolio_little-seeds.jpg" alt="Little Seeds"></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.portfolio {
    ul {
        padding:0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;

      li {
        list-style: none;
        flex: 1 0 50%;

      img {
        width: 100%;
      }
    }
  }
}

</style>
