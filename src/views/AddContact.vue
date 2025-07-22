<template>
  <div>
    <h2>Add Contact</h2>
    <form @submit.prevent="addContact">
      <input v-model="firstName" placeholder="First Name" required />
      <input v-model="lastName" placeholder="Last Name" required />
      <input v-model="email" placeholder="Email" required />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getContacts, saveContacts } from '../helpers/storage';
import { useRouter } from 'vue-router';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const router = useRouter();

function addContact() {
  const contacts = getContacts();
  const newContact = {
    id: Date.now().toString(),
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  };
  contacts.push(newContact);
  saveContacts(contacts);
  router.push(`/contact/${newContact.id}`);
}
</script>
