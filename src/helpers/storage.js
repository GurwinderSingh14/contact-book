const STORAGE_KEY = 'contacts';

export function getContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}

export function getContactById(id) {
  const contacts = getContacts();
  return contacts.find(c => c.id === id);
}
