<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (typeof window !== 'undefined' && window.Snipcart) {
    window.Snipcart.init({
      publicApiKey: 'ZDU3NDg5NzEtZGNhZS00NjgxLTkxYzAtNjE5OTA4ZTk0ZWM5NjM4NjY0NTc4NDc3NTk4Mjc5',
      currency: 'usd' // Cambia a la moneda que estés usando
    });
  }
});
</script>
<template>
    <div class="row"  style="margin-top: 15px">
      <NuxtLink class="two columns button button-primary" to="/">
        Home</NuxtLink>
      <NuxtLink class="two columns button button-primary" to="/aviones">
        Aviones</NuxtLink>
      <NuxtLink class="two columns button button-primary" to="/fabricantes">
        Fabricantes</NuxtLink>
      <NuxtLink class="three columns button button-primary" to="/aerolineas">Aerolineas</NuxtLink>
          <button class="snipcart-checkout three columns button"><span class="snipcart-items-count">0</span> books in the 🛒 </button>
    </div>
  </template>

<style scoped>
header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 15rem;
    justify-content: center;
}

nav a {
    color: #fff;
    text-decoration: none;
}
</style>