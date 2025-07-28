<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getContactById, updateContact } from '../services/contactService'

const route = useRoute()
const router = useRouter()
const contact = ref(null)

onMounted(() => {
  contact.value = { ...getContactById(route.params.id) }
})

function submit() {
  updateContact(contact.value.id, contact.value)
  router.push(`/contact/${contact.value.id}`)
}
</script>

<template>
  <div v-if="contact">
    <h2>Edit Contact</h2>
    <input v-model="contact.firstName" placeholder="First Name" />
    <input v-model="contact.lastName" placeholder="Last Name" />
    <input v-model="contact.email" placeholder="Email" />
    <button @click="submit">Save</button>
  </div>
</template>
