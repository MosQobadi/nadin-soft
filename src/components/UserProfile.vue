<template>
  <div class="name-change" :class="{ 'dark-mode': selectedTheme === 'dark' }">
    <h2>{{ $t('user_profile') }}</h2>
    <div class="form-group">
      <input type="text" v-model="newName" :placeholder="$t('placeholders.name')" />
      <a-button @click="updateName">{{ $t('buttons.save') }}</a-button>
    </div>
    <div class="theme-dropdown">
      <select v-model="selectedTheme" @change="changeTheme">
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme</option>
      </select>
    </div>
    <div class="locale-dropdown">
      <select v-model="selectedLanguage" @change="switchLanguage">
        <option value="en">English</option>
        <option value="fa">Persian</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  data(): any {
    return {
      newName: "",
      selectedTheme: "light",
      selectedLanguage: this.$i18n.locale,
    };
  },
  methods: {
    switchLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    },
    updateName() {
      if (this.newName) {
        localStorage.setItem("username", this.newName);
        this.$emit("name-updated", this.newName);
        this.newName = "";
      }
    },
    changeTheme() {
      localStorage.setItem("selectedTheme", this.selectedTheme);
      this.$emit("theme-changed", this.selectedTheme);

      // Update the global state with the selected theme
      const globalState = inject('globalState');
      if (globalState) {
        this.selectedTheme = this.selectedTheme;
      }
    },
  },
  created() {
    const storedTheme = localStorage.getItem("selectedTheme");
    if (storedTheme) {
      this.selectedTheme = storedTheme;
    }
  },
});
</script>


<style>
.theme-dropdown {
  margin-top: 1rem;
}

.name-change {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.dark-mode {
  background-color: rgb(38, 38, 59);
  color: #f4f4f4;
}

.dark-mode .theme-dropdown,
.dark-mode .locale-dropdown {
  color: #333;
}
</style>
