<template>
  <div v-if="contact">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p>Email: {{ contact.email }}</p>

    <router-link :to="`/edit/${contact.id}`">Edit</router-link>
    <button @click="deleteContact">Delete</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getContacts, saveContacts, getContactById } from '../helpers/storage';

const route = useRoute();
const router = useRouter();
const contact = ref(null);

onMounted(() => {
  contact.value = getContactById(route.params.id);
});

function deleteContact() {
  const contacts = getContacts().filter(c => c.id !== contact.value.id);
  saveContacts(contacts);
  router.push('/');
}
</script>
