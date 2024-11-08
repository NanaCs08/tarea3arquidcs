<template>
  <header class="bg-dark text-white py-3">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex gap-3">
          <NuxtLink class="btn btn-outline-light" to="/">Home</NuxtLink>
          <NuxtLink class="btn btn-outline-light" to="/aviones">Aviones</NuxtLink>
          <NuxtLink class="btn btn-outline-light" to="/fabricantes">Fabricantes</NuxtLink>
          <NuxtLink class="btn btn-outline-light" to="/aerolineas">Aerolíneas</NuxtLink>
        </div>
        <button class="btn btn-primary snipcart-checkout">
          <span class="snipcart-items-count">0</span> Tiquets in the 🛒
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Ajusta el espacio y la alineación si es necesario */
header {
  border-bottom: 1px solid #444;
}
</style>
