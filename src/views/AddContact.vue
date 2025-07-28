<script setup>
import { ref } from 'vue'
import { addContact } from '../services/contactService'
import { useRouter } from 'vue-router'

const router = useRouter()
const contact = ref({ id: Date.now().toString(), firstName: '', lastName: '', email: '' })

function submit() {
  addContact(contact.value)
  router.push(`/contact/${contact.value.id}`)
}
</script>

<template>
  <div>
    <h2>Add Contact</h2>
    <input v-model="contact.firstName" placeholder="First Name" />
    <input v-model="contact.lastName" placeholder="Last Name" />
    <input v-model="contact.email" placeholder="Email" />
    <button @click="submit">Save</button>
  </div>
</template>
