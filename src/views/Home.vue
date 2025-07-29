<script setup>
import { ref, computed, onMounted } from 'vue'
import { getContacts } from '../services/contactService'
import { useRouter } from 'vue-router'

const router = useRouter()
const search = ref('')
const contacts = ref([])

onMounted(() => {
  contacts.value = getContacts()
})

const filteredContacts = computed(() => {
  return contacts.value
    .filter(c => {
      const term = search.value.toLowerCase()
      return c.firstName.toLowerCase().includes(term) || c.lastName.toLowerCase().includes(term)
    })
    .sort((a, b) => a.lastName.localeCompare(b.lastName))
})

function viewContact(id) {
  router.push(`/contact/${id}`)
}
</script>

<template>
  <div>
    <input v-model="search" placeholder="Search by name..." />
    <ul>
      <li v-for="contact in filteredContacts" :key="contact.id" @click="viewContact(contact.id)" style="cursor:pointer;">
        {{ contact.firstName }} {{ contact.lastName }}
      </li>
    </ul>
    <router-link to="/add">Add New Contact</router-link>
  </div>
</template>
