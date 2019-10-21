<template>
  <div id="app">
    <TemplateDefault></TemplateDefault>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    TemplateDefault,
  },
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
