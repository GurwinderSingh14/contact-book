<template>
  <div v-if="contact">
    <h2>Edit Contact</h2>
    <form @submit.prevent="updateContact">
      <input v-model="contact.firstName" required />
      <input v-model="contact.lastName" required />
      <input v-model="contact.email" required />
      <button type="submit">Save</button>
    </form>
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
  contact.value = { ...getContactById(route.params.id) };
});

function updateContact() {
  const contacts = getContacts().map(c =>
    c.id === contact.value.id ? contact.value : c
  );
  saveContacts(contacts);
  router.push(`/contact/${contact.value.id}`);
}
</script>
