<template>
  <div class="container my-5">
    <Header />
    <div class="text-center mb-4">
      <h1 class="display-4">Lista de Aerolíneas</h1>
    </div>
    <main>
      <ul class="list-unstyled row">
        <li v-for="aerolinea in aerolineas" :key="aerolinea.nombre" class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title">{{ aerolinea.nombre }}</h5>
              <nuxt-link :to="`/aerolineas/${aerolinea.nombre}`" class="btn btn-link">
                Ver detalles
              </nuxt-link>
              <button
                class="btn btn-primary snipcart-add-item"
                :data-item-id="'aerolinea-' + aerolinea.nombre"
                :data-item-name="aerolinea.nombre"
                data-item-price="250.00"
                :data-item-url="`/aerolineas/${aerolinea.nombre}`"
                data-item-description="Descripción de la aerolínea"
              >
                Comprar
              </button>
            </div>
          </div>
        </li>
      </ul>
    </main>
    <Footer />
    <div
      id="snipcart"
      hidden
      data-api-key="ZDU3NDg5NzEtZGNhZS00NjgxLTkxYzAtNjE5OTA4ZTk0ZWM5NjM4NjY0NTc4NDc3NTk4Mjc5"
      data-config-modal-style="side"
    ></div>
  </div>
</template>

<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import { ref, onMounted } from 'vue';

const aerolineas = ref([]);

const importAerolíneas = async () => {
  const modules = import.meta.glob('@/data/aerolineas/*.json');
  const aerolineaPromises = Object.values(modules).map((module) => module());
  const aerolineaData = await Promise.all(aerolineaPromises);
  aerolineas.value = aerolineaData.flat();
};

onMounted(() => {
  importAerolíneas();
});
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si lo necesitas */
</style>
