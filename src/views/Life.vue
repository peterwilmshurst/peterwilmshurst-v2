<template>
 <insta-feed
 :token="instagramToken"
 fields="media_url,media_type,caption,permalink"
 container-class="image-container"
 :mediatypes="['IMAGE']">

  <template v-slot:loading="props">
    <h1 v-if="props.loading" class="fancy-loading">
      Loading, please wait...
    </h1>
  </template>

  <template v-slot:feeds="props">
    <a :href="props.feed.permalink" rel="noopener" target="_blank">
      <div class="instagram-image">
        <img :src="props.feed.media_url" alt="Instagram post">
        <div :text="props.feed.caption" />
      </div>
    </a>
  </template>

  <template v-slot:error="props">
    <div class="fancy-alert">
      {{ props.error }}
    </div>
  </template>
  
</insta-feed>
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