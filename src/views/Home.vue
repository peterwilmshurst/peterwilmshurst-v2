<template>
  <div class="home wrap">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="blog">
        <div class="blog--post" v-for="entry in entries[section]" :key="entry.id">
            <h2 @click="$router.push({name: entry.id})">
              {{entry.title}}
              <span class="subtitle">{{entry.date}}</span>
            </h2>
            <p>{{entry.description}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import BlogEntries from '@/statics/data/blogs.json'

export default {
  name: 'home',
  computed: {
    entries() {
      return BlogEntries
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: #39b54a;
  margin-bottom: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  .subtitle {
    color: #38344d;
    font-size: 1rem;
    float: right;
    font-weight: normal;
  }
}

p {
  margin-top: .5rem;
}

.blog {
  &--post {
    margin-bottom: 3rem;
  }
}
</style>
