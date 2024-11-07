<template>
  <div>
    <Header />
    <div>
      <h1>Lista de Fabricantes</h1>
      <ul>
        <li v-for="fabricante in fabricantes" :key="fabricante.nombre">
          <nuxt-link :to="`/fabricantes/${fabricante.nombre}`">{{ fabricante.nombre }}</nuxt-link>
        </li>
      </ul>
    </div>
    <li v-for="fabricante in fabricantes" :key="fabricante.nombre">
      <nuxt-link :to="`/fabricantes/${fabricante.nombre}`">{{ fabricante.nombre }}</nuxt-link>
      <button
        class="snipcart-add-item"
        data-item-id="fabricante-{{ fabricante.nombre }}"
        data-item-name="{{ fabricante.nombre }}"
        data-item-price="200.00" <!-- Cambia el precio según tu necesidad -->
        data-item-url="/fabricantes/{{ fabricante.nombre }}"
        data-item-description="Descripción del fabricante"
      >
        Comprar
      </button>
    </li>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import { ref, onMounted } from 'vue';

const fabricantes = ref([]);

const importFabricantes = async () => {
  const modules = import.meta.glob('@/data/fabricantes/*.json');
  const fabricantePromises = Object.values(modules).map((module) => module());
  const fabricanteData = await Promise.all(fabricantePromises);
  fabricantes.value = fabricanteData.flat();
};

onMounted(() => {
  importFabricantes();
});
</script>

<style scoped>
h1 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  text-align: center;
  margin: 0.5rem 0;
}
</style>