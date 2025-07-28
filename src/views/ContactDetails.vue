<script setup>
import { onMounted, ref } from 'vue'
import { getContactById, deleteContact } from '../services/contactService'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const contact = ref(null)

onMounted(() => {
  contact.value = getContactById(route.params.id)
})

function remove() {
  deleteContact(contact.value.id)
  router.push('/')
}
</script>

<template>
  <div v-if="contact">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p>Email: {{ contact.email }}</p>
    <router-link :to="`/edit/${contact.id}`">Edit</router-link>
    <button @click="remove">Delete</button>
  </div>
</template>
