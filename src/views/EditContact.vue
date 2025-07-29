<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getContactById, updateContact } from '../services/contactService'

const route = useRoute()
const router = useRouter()
const contact = ref(null)

onMounted(() => {
  const existing = getContactById(route.params.id)
  if(existing) {
    contact.value = { ...existing }
  } else {
    alert('Contact not found.')
    router.push('/')
  }
})

function saveEdit() {
  if (
    contact.value.firstName.trim() &&
    contact.value.lastName.trim() &&
    contact.value.email.trim()
  ) {
    updateContact(contact.value.id, contact.value)
    router.push(`/contact/${contact.value.id}`)
  } else {
    alert('Please fill in First Name, Last Name, and Email.')
  }
}
</script>

<template>
  <div v-if="contact">
    <h2>Edit Contact</h2>
    <input v-model="contact.firstName" placeholder="First Name" />
    <input v-model="contact.lastName" placeholder="Last Name" />
    <input v-model="contact.email" placeholder="Email" />
    <input v-model="contact.phone" placeholder="Phone" />
    <input v-model="contact.address" placeholder="Address" />
    <button @click="saveEdit">Save Changes</button>
    <router-link :to="`/contact/${contact.id}`">Cancel</router-link>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
