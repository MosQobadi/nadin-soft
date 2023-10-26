<template>
  <div class="dashboard" :class="{ 'dark-theme': isDarkTheme }">
    <h1>Dashboard</h1>
    <p>{{ welcomeMessage }}</p>
    <p>Current Time: {{ currentTime }}</p>
    <name-change @name-updated="updateWelcomeMessage" @theme-changed="toggleTheme" />
  </div>
</template>

<script>
import UserProfile from "./UserProfile.vue";

export default {
  data() {
    const storedName = localStorage.getItem("username");
    return {
      currentTime: new Date().toLocaleTimeString(),
      welcomeMessage: storedName ? `Welcome ${storedName}` : "Welcome User",
      isDarkTheme: false,
    };
  },
  methods: {
    updateWelcomeMessage(newName) {
      this.welcomeMessage = `welcome ${newName}`;
    },
    toggleTheme(newTheme) {
      // Update the theme based on the user's choice
      this.isDarkTheme = newTheme === "dark";
    },
  },
  created() {
    // Check local storage for the user's theme preference
    const storedTheme = localStorage.getItem("selectedTheme");
    if (storedTheme !== null) {
      this.isDarkTheme = storedTheme === "dark";
    }
  },
  components: {
    UserProfile,
  },
};
</script>

<style>
.dashboard {
  width: 100%;
}

.dark-theme {
  width: 100%;
}
</style>