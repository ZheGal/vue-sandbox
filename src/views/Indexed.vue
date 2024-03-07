<template>
  <div class="indexed-page">
    <h1>Indexed DB</h1>
    <button @click="addItem">Add Item</button>
    <ul class="flex flex-col gap-2">
      <li
        v-for="item in items"
        :key="item.id"
        class="border p-1 px-3 flex justify-between"
      >
        <div>{{ item.date }}</div>
        <div><button @click="removeItem(item.id)">Delete</button></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { openDB } from "idb";

const db = ref(null);
const items = ref([]);

onMounted(async () => {
  try {
    db.value = await openDB("myDatabase111", 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("items")) {
          db.createObjectStore("items", { keyPath: "id", autoIncrement: true });
        }
      },
    });

    const tx = db.value.transaction("items", "readonly");
    const store = tx.objectStore("items");

    const allItems = await store.getAll();
    items.value = allItems;

    tx.done;
  } catch (error) {
    console.error("Error reading database", error);
  }
});

const addItem = async () => {
  try {
    const tx = db.value.transaction("items", "readwrite");
    const store = tx.objectStore("items");

    const newItem = { date: Date.now() };
    const newItemId = await store.add(newItem);

    items.value.push({ id: newItemId, ...newItem });

    tx.done;
  } catch (error) {
    console.error("Error adding item to database", error);
  }
};

async function removeItem(id) {
  try {
    const tx = db.value.transaction("items", "readwrite");
    const store = tx.objectStore("items");
    await store.delete(id);
    items.value = items.value.filter((item) => item.id !== id);
    tx.done;
  } catch (error) {
    console.error("Error deleting item from database", error);
  }
}
</script>

<style scoped>
.indexed-page {
  @apply container mx-auto py-6;
}
</style>
