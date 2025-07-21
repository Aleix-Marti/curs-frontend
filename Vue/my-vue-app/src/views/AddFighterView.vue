<script setup>
import { ref, computed } from 'vue'
import { addFighter } from '@/services/services.js'

// State reactiu
const character = ref({
  img: '',
  name: '',
  attack: null,
  deffense: null,
  latitude: null,
  longitude: null,
  description: ''
})

const isLoading = ref(false)
const message = ref('')
const isError = ref(false)

// Computed per la classe del missatge
const messageClass = computed(() => ({
  'message-success': !isError.value,
  'message-error': isError.value
}))

// Funcions
const handleSubmit = async () => {
  isLoading.value = true
  message.value = ''
  isError.value = false

  try {
    const result = await addFighter(character.value)

    console.log(result)
    
    message.value = 'Personatge afegit correctament!'
    isError.value = false
    resetForm()
    
    console.log('Personatge creat:', result)
    
  } catch (error) {
    console.error('Error afegint personatge:', error)
    message.value = 'Error afegint el personatge. Torna-ho a provar.'
    isError.value = true
  } finally {
    isLoading.value = false
    
    // Amagar missatge després de 3 segons
    setTimeout(() => {
      message.value = ''
    }, 3000)
  }
}

const resetForm = () => {
  character.value = {
    img: '',
    name: '',
    attack: null,
    deffense: null,
    latitude: null,
    longitude: null,
    description: ''
  }
}

</script>


<template>
  <div class="add-character-container">
    <div class="form-wrapper">
      <h2>Afegir Nou Personatge</h2>
      
      <form @submit.prevent="handleSubmit" class="character-form">
        <div class="form-group">
          <label for="name">Nom:</label>
          <input 
            type="text" 
            id="name"
            v-model="character.name" 
            required
            placeholder="Nom del personatge"
          />
        </div>

        <div class="form-group">
          <label for="img">URL de la imatge:</label>
          <input 
            type="url" 
            id="img"
            v-model="character.img" 
            required
            placeholder="https://exemple.com/imatge.jpg"
          />
        </div>

        <div class="form-group">
          <label for="attack">Atac:</label>
          <input 
            type="number" 
            id="attack"
            v-model.number="character.attack" 
            min="1"
            max="100"
            required
            placeholder="Nivell d'atac (1-100)"
          />
        </div>

        <div class="form-group">
          <label for="deffense">Defensa:</label>
          <input 
            type="number" 
            id="deffense"
            v-model.number="character.deffense" 
            min="1"
            max="100"
            required
            placeholder="Nivell de defensa (1-100)"
          />
        </div>

        <div class="form-group">
          <label for="latitude">Latitud:</label>
          <input 
            type="number" 
            id="latitude"
            v-model.number="character.latitude" 
            min="-90"
            max="90"
            step="0.000001"
            required
            placeholder="Latitud (-90 a 90)"
          />
        </div>

        <div class="form-group">
          <label for="longitude">Longitud:</label>
          <input 
            type="number" 
            id="longitude"
            v-model.number="character.longitude" 
            min="-180"
            max="180"
            step="0.000001"
            required
            placeholder="Longitud (-180 a 180)"
          />
        </div>

        <div class="form-group">
          <label for="description">Descripció:</label>
          <textarea 
            id="description"
            v-model="character.description" 
            rows="4"
            required
            placeholder="Descripció del personatge..."
          ></textarea>
        </div>

        <div class="form-actions">
          <button 
            type="submit" 
            :disabled="isLoading"
            class="submit-btn"
          >
            {{ isLoading ? 'Afegint...' : 'Afegir Personatge' }}
          </button>
          
          <button 
            type="button" 
            @click="resetForm"
            class="reset-btn"
          >
            Esborrar
          </button>
        </div>
      </form>

      <!-- Missatges d'estat -->
      <div v-if="message" :class="messageClass" class="message">
        {{ message }}
      </div>
    </div>
  </div>
</template>


<style scoped>
.add-character-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.form-wrapper {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}

.character-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #555;
}

input, textarea {
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #007bff;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.submit-btn, .reset-btn {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn {
  background-color: #007bff;
  color: white;
}

.submit-btn:hover:not(:disabled) {
  background-color: #0056b3;
}

.submit-btn:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.reset-btn {
  background-color: #6c757d;
  color: white;
}

.reset-btn:hover {
  background-color: #5a6268;
}

.message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
}

.message-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.message-error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* Responsive */
@media (max-width: 768px) {
  .form-wrapper {
    padding: 1rem;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .submit-btn, .reset-btn {
    width: 100%;
  }
}
</style>