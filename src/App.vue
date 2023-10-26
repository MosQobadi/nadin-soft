<template>
  <div id="app">
    <SlideMenu id="slide-menu" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue';
import SlideMenu from './components/SlideMenu.vue';
const ButtonGroup = Button.Group;

export default {
  components: {
    SlideMenu,
    AButton: Button,
    AButtonGroup: ButtonGroup,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#slide-menu {
  height: 100vh;
  position: fixed;
  left: 0;
  min-width: 150px;
  max-width: 10%;
}

.content {
  height: 100vh;
  display: flex;
  flex-basis: 4;
  justify-content: center;
  align-items: center;
  width: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
