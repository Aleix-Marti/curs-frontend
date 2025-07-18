// Configuració
const GEMINI_API_KEY = 'la_teva_clau_API'; // Afegeix la teva clau d'API aquí

// Elements del DOM
const form = document.getElementById('travel-form');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');
const errorText = document.getElementById('error-text');
const loading = document.getElementById('loading');
const recommendation = document.getElementById('recommendation');
const recommendationText = document.getElementById('recommendation-text');
const emptyState = document.getElementById('empty-state');

// Funció per generar el prompt
function generatePrompt(formData) {
    return `Actua com un expert en viatges i crea una recomanació personalitzada de viatge amb la següent informació:

Destinació: ${formData.destination}
Durada: ${formData.duration}
Pressupost: ${formData.budget}
Nombre de viatgers: ${formData.travelers}
Interessos: ${formData.interests}
Època de l'any: ${formData.season}
Tipus d'allotjament: ${formData.accommodation}

Proporciona una recomanació detallada que inclogui:
1. Activitats principals recomanades
2. Llocs d'interès imprescindibles
3. Suggeriments gastronòmics
4. Consells pràctics per al viatge
5. Estimació de costos aproximats
6. Millor època per visitar (si és rellevant)

Fes la resposta en català i sigues específic i pràctic.`;
}

// Funció per mostrar/amagar elements
function showElement(element) {
    element.classList.remove('hidden');
}

function hideElement(element) {
    element.classList.add('hidden');
}

// Funció per actualitzar l'estat del botó
function updateSubmitButton(loading) {
    if (loading) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <div class="spinner spinner-sm"></div>
            Generant recomanació...
        `;
    } else {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
            <svg class="lucide-icon" viewBox="0 0 24 24">
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
                <path d="M21.854 2.147 10.94 13.06"/>
            </svg>
            Generar recomanació
        `;
    }
}

// Funció per cridar a Gemini API
async function callGeminiAPI(prompt) {
    // OPCIÓ A: Usar el SDK oficial de Google (necessita instal·lació)
    /*
    try {
        const { GoogleGenerativeAI } = await import('https://esm.sh/@google/generative-ai');
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        throw new Error('Error amb el SDK de Google: ' + error.message);
    }
    */

    // OPCIÓ B: Usar fetch directe
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        throw new Error('Error amb la crida a Gemini API: ' + error.message);
    }
}

// Gestió del formulari
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Recollir dades del formulari
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Amagar missatges anteriors
    hideElement(errorMessage);
    hideElement(recommendation);
    hideElement(emptyState);
    
    // Mostrar loading
    showElement(loading);
    updateSubmitButton(true);
    
    try {
        const prompt = generatePrompt(data);
        const result = await callGeminiAPI(prompt);
        
        // Mostrar resultat
        hideElement(loading);
        recommendationText.textContent = result;
        showElement(recommendation);
        
    } catch (error) {
        // Mostrar error
        hideElement(loading);
        errorText.textContent = error.message;
        showElement(errorMessage);
        console.error('Error:', error);
    } finally {
        updateSubmitButton(false);
    }
});