import { ref } from 'vue';

export function useTheme() {
  const theme = ref<'light' | 'dark'>('light');
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  return {
    theme,
    toggleTheme,
  };
}
