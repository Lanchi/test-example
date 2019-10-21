<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  asyncData() {
    /**
     * This can be loaded by leveraging navigation hooks
     * and it will work if you change your app to SSR in the future
     *
     */
  },
  created() {
    // your complex logic here
  },
};
</script>
