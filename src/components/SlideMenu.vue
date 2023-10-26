<template>
  <div id="slide-menu">
    <div :class="{ 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme }">
      <a-menu v-model:selectedKeys="current" mode="vertical" class="menu">
        <router-link to="/">
          <a-menu-item key="mail" class="menu-item">
            <template #icon>
              <mail-outlined />
            </template>
            {{ $t('dashboard') }}
          </a-menu-item>
        </router-link>
        <router-link to="/todo-list">
          <a-menu-item key="mail" class="menu-item">
            <template #icon>
              <mail-outlined />
            </template>
            {{ $t('todo_list') }}
          </a-menu-item>
        </router-link>
        <router-link to="/weather">
          <a-menu-item key="mail" class="menu-item">
            <template #icon>
              <mail-outlined />
            </template>
            {{ $t('weather') }}
          </a-menu-item>
        </router-link>
        <router-link to="/profile">
          <a-menu-item key="mail" class="menu-item">
            <template #icon>
              <mail-outlined />
            </template>
            {{ $t('user_profile') }}
          </a-menu-item>
        </router-link>
      </a-menu>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref, onMounted, watch } from 'vue';
import { MailOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    const current = ref(['mail']);
    const isDarkTheme = ref(false);

    const toggleTheme = () => {
      isDarkTheme.value = localStorage.getItem("selectedTheme") === "dark";
    };

    onMounted(() => {
      toggleTheme();
    });

    // Watch for changes in the selected theme
    watch(
      () => localStorage.getItem("selectedTheme"),
      () => {
        toggleTheme();
      }
    );

    return {
      current,
      isDarkTheme,
    };
  },
  components: {
    MailOutlined,
  },
  name: 'SlideMenu',
});
</script>

<style>
.dark-theme .menu {
  background-color: rgb(33, 33, 46);
}

.dark-theme .menu .menu-item {
  background-color: rgb(45, 45, 63);
}

#dashboard {
  height: 100vh;
}

ul {
  height: 100vh;
}
</style>