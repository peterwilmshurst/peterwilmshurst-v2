<template>
<div class="life wrap">

 <insta-feed
 :token="instagramToken"
 fields="media_url,media_type,caption,permalink"
 container-class="instagram-container"
 :count="24"
 :mediatypes="['IMAGE','VIDEO','CAROUSEL_ALBUM']">

  <template v-slot:loading="props">
    <h1 v-if="props.loading" class="fancy-loading">
      Loading, please wait...
    </h1>
  </template>

  <template v-slot:feeds="props">
      <div class="instagram-image">
         <a :href="props.feed.permalink" rel="noopener" target="_blank">
        <img :src="props.feed.media_url" alt="Instagram post">
         </a>
        <p class="caption">{{props.feed.caption}}</p>
      </div>
   
  </template>

  <template v-slot:error="props">
    <div class="fancy-alert">
      {{ props.error }}
    </div>
  </template>
  
</insta-feed>

</div>
</template>

<script>
import instaFeed from '@/components/instaFeed.vue'

export default {
  name: 'life',
  components: {
    instaFeed
  },
    data() { 
    return { 
        instagramToken: process.env.VUE_APP_INSTAGRAM_TOKEN
    }
  }
}
</script>

<style lang="scss" scoped>

.instagram-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

.instagram-image {
    margin: 1rem 0;
    flex-grow: 1;
    width: 100%;

    @media only screen and (min-width: 768px) {
    margin: 1rem;
    width: 33%;
    }

    img {
    width:100%;
    height: auto;
    }
  } 

  .caption {
font-size: 1rem;
font-style: italic;
font-weight: 100;
padding: 0;
margin: 0;
  }
}

</style>