import { ref, watchEffect } from "vue";

export const useDarkMode = () => {
  const enabled = ref(false);

  if (localStorage.getItem("theme") === "dark") {
    enabled.value = true;
  }

  watchEffect(() => {
    if (enabled.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  return { enabled };
};
