<template>
  <div class="list-view">
    <div
      v-if="filteredList.length === 0"
      class="empty-list"
    >
      <div>Ooops! Nothing here..🙈</div>
      <router-link
        to="/"
        class="item-title"
      >
        <a>Go Back</a>
      </router-link>
    </div>
    <ol
      v-else
      class="list"
    >
      <!-- TITLE FOR FILTER -->
      <div
        v-if="tagFilter"
        class="filter-title"
      >
        <h1>{{ tagFilter }}</h1>
        <router-link
          to="/"
        >
          <a class="discreet">clear filter</a>
        </router-link>
      </div>

      <!-- POST LIST -->
      <li
        v-for="page of filteredList"
        :key="page.key"
        class="list-item"
      >
        <!-- POST TITLE -->
        <router-link
          :to="page.path"
          class="item-title"
        >
          {{ page.title }}
        </router-link>
        <!-- POST BRIEF -->
        <div
          v-if="page.brief"
          class="item-subtitle"
        >
          {{page.brief}}
        </div>
        <!-- POST IMAGE -->
        <img
          v-if="page.frontmatter.image"
          class="preview-image"
          :src="page.frontmatter.image"
        ></img>
        <!-- POST FOOTER -->
        <div>
          <span>
            <time-ago
              :last-updated="page.frontmatter.date || page.lastUpdated"
              class="item-date"
            />
          </span>
          <span>
            <router-link
              v-for="tag of page.tags"
              :key="tag"
              :to="`/?tag=${tag}`"
              class="item-tag"
            >
              {{ tag }}
            </router-link>
          </span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import TimeAgo from './TimeAgo';

export default {
  components: {
    TimeAgo
  },
  computed: {
    tagFilter() {
      return this.$route.query.tag || null;
    },
    filteredList() {
      // Order by publish date, desc
      return this.$site.pages
        .filter(item => item.path !== '/')
        .filter(item => {
          if (!this.tagFilter) {
            return true;
          }

          const tags = item.frontmatter.tags || [];

          if (!Array.isArray(tags)) {
            return false;
          }

          return !!tags.find(t => t.toLowerCase() === this.tagFilter.toLowerCase());
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date || b.lastUpdated) - new Date(a.frontmatter.date || a.lastUpdated)
        })
        .map(post => {
          return {
            ...post,
            tags: post.frontmatter.tags || [],
            brief: post.frontmatter.brief || '',
          }
        })
    }
  },
}
</script>
