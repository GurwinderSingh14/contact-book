<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addContact } from '../services/contactService'

const router = useRouter()

const newContact = ref({
  id: Date.now().toString(),  // unique id
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: ''
})

function saveContact() {
  if (
    newContact.value.firstName.trim() &&
    newContact.value.lastName.trim() &&
    newContact.value.email.trim()
  ) {
    addContact(newContact.value)
    router.push('/')
  } else {
    alert('Please fill in First Name, Last Name, and Email.')
  }
}
</script>

<template>
  <div>
    <h2>Add New Contact</h2>
    <input v-model="newContact.firstName" placeholder="First Name" />
    <input v-model="newContact.lastName" placeholder="Last Name" />
    <input v-model="newContact.email" placeholder="Email" />
    <input v-model="newContact.phone" placeholder="Phone" />
    <input v-model="newContact.address" placeholder="Address" />
    <button @click="saveContact">Save Contact</button>
    <router-link to="/">Cancel</router-link>
  </div>
</template>
