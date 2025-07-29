const STORAGE_KEY = 'contacts'

export function getContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
}

export function saveContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
}

export function getContactById(id) {
  return getContacts().find(c => c.id === id)
}

export function addContact(contact) {
  const contacts = getContacts()
  contacts.push(contact)
  saveContacts(contacts)
}

export function updateContact(id, updatedContact) {
  let contacts = getContacts()
  const index = contacts.findIndex(c => c.id === id)
  if (index !== -1) {
    contacts[index] = updatedContact
    saveContacts(contacts)
  }
}

export function deleteContact(id) {
  let contacts = getContacts().filter(c => c.id !== id)
  saveContacts(contacts)
}
