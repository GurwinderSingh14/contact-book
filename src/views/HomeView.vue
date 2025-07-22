<template>
  <div>
    <h2>All Contacts</h2>
    <input type="text" v-model="search" placeholder="Search contacts..." />

    <ul>
      <li v-for="contact in filteredContacts" :key="contact.id">
        <router-link :to="`/contact/${contact.id}`">
          {{ contact.firstName }} {{ contact.lastName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { getContacts } from '../helpers/storage';

const contacts = ref([]);
const search = ref('');

onMounted(() => {
  contacts.value = getContacts().sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );
});

const filteredContacts = computed(() => {
  const term = search.value.toLowerCase();
  return contacts.value.filter(c =>
    `${c.firstName} ${c.lastName}`.toLowerCase().includes(term)
  );
});
</script>
