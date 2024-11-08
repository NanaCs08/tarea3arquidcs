<template>
  <div class="container my-5">
    <Header />
    <div class="text-center mb-4">
      <h1 class="display-4">Lista de Aviones</h1>
    </div>
    <main>
      <ul class="list-unstyled row">
        <li v-for="avion in aviones" :key="avion.modelo" class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title">{{ avion.modelo }}</h5>
              <nuxt-link :to="{ path: `/aviones/${generateSlug(avion.modelo)}` }" class="btn btn-link">
                Ver detalles
              </nuxt-link>
              <button
                class="btn btn-primary snipcart-add-item"
                :data-item-id="'avion-' + avion.modelo"
                :data-item-name="avion.modelo"
                data-item-price="150.00"
                :data-item-url="`/aviones/${generateSlug(avion.modelo)}`"
                data-item-description="Descripción del avión"
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

const aviones = ref([]);

const importAviones = async () => {
  const modules = import.meta.glob('@/data/aviones/*.json');
  const avionPromises = Object.values(modules).map((module) => module());
  const avionData = await Promise.all(avionPromises);
  aviones.value = avionData.map(data => data.default || data);
};

const generateSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Reemplaza espacios con -
    .replace(/[^\w\-]+/g, '')       // Elimina caracteres no válidos
    .replace(/\-\-+/g, '-')         // Reemplaza múltiples - con uno solo
    .replace(/^-+/, '')             // Elimina - al inicio
    .replace(/-+$/, '');            // Elimina - al final
};

onMounted(() => {
  importAviones();
});
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si lo necesitas */
</style>
