<template>
  <div id="app">
    <Header />
    <main class="main">
      <Canvas />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Canvas from './components/Canvas.vue';

export default {
  name: 'App',
  components: {
    Canvas,
    Header,
  },
};
</script>
<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}

#app {
  color: #fff;
  margin: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 85px auto;
  gap: 0 0;
  grid-template-areas:
    "Header"
    "Main";
}

.main { grid-area: Main; }
.header { grid-area: Header; }
</style>
