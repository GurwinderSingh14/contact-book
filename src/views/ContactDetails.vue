<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getContactById, deleteContact } from '../services/contactService'

const route = useRoute()
const router = useRouter()
const contact = ref(null)

onMounted(() => {
  contact.value = getContactById(route.params.id)
})

function remove() {
  if(confirm(`Delete contact: ${contact.value.firstName} ${contact.value.lastName}?`)) {
    deleteContact(contact.value.id)
    router.push('/')
  }
}
</script>

<template>
  <div v-if="contact">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p><strong>Email:</strong> {{ contact.email }}</p>
    <p><strong>Phone:</strong> {{ contact.phone }}</p>
    <p><strong>Address:</strong> {{ contact.address }}</p>
    <router-link :to="`/edit/${contact.id}`">Edit</router-link>
    <button @click="remove">Delete</button>
  </div>
  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>
