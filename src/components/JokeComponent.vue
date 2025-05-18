<!-- src/components/JokeComponent.vue -->
<!-- 
  Composant de générateur de blagues Carambar
  Ce composant affiche une blague aléatoire dans un style visuel rappelant les emballages Carambar.
  Il gère les états de chargement, d'erreur et d'affichage des blagues.
-->
<template>
  <!-- Conteneur principal avec style d'emballage Carambar -->
  <div class="carambar-container">
    <!-- Section d'en-tête avec logo et tagline -->
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo Carambar" class="logo" />
      <p class="tagline">Découvrez une nouvelle blague à chaque clic!</p>
    </div>
    <!-- 
      Zone d'affichage de la blague avec gestion des états
      La classe conditionnelle 'loading' est appliquée pendant le chargement
    -->
    <div class="joke-paper" :class="{ loading: loading }">
      <div v-if="loading" class="spinner-wrapper">
        <img
          src="@/assets/loading.svg"
          alt="Chargement..."
          class="loading-svg"
        />
      </div>
      <!-- Affichage conditionnel selon l'état : blague, erreur ou état initial -->
      <p v-if="joke" class="joke-text" v-html="joke.text"></p>
      <p v-else-if="error" class="error-text">{{ error }}</p>
      <p v-else class="placeholder-text">
        Cliquez sur le bonbon pour découvrir une blague Carambar!
      </p>
    </div>
    <!-- Bouton d'action avec apparence de bonbon, désactivé pendant le chargement -->
    <button @click="fetchRandomJoke" class="candy-button" :disabled="loading">
      <img src="@/assets/button.png" alt="Une nouvelle blague" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JokeService from "@/services/JokeService";
import { Joke } from "@/types/Joke";

/**
 * Composant principal de l'application de blagues Carambar
 * Gère la récupération et l'affichage des blagues aléatoires
 */
export default defineComponent({
  name: "JokeComponent",
  data() {
    return {
      joke: null as Joke | null, // Blague actuellement affichée
      loading: false, // Indicateur de chargement
      error: "", // Message d'erreur en cas de problème
    };
  },
  methods: {
    /**
     * Récupère une blague aléatoire depuis le service
     * Gère les états de chargement et d'erreur
     * Garantit un temps minimum d'affichage du spinner pour éviter les flashs
     */
    async fetchRandomJoke() {
      this.loading = true;
      this.error = "";
      const startTime = Date.now();
      try {
        this.joke = await JokeService.getRandomJoke();
      } catch (err) {
        this.error = "Impossible de récupérer une blague. Veuillez réessayer.";
        console.error("Erreur lors de la récupération de la blague:", err);
      } finally {
        // Assure un temps minimum d'affichage du spinner (500ms)
        // pour éviter un effet de clignotement sur les chargements rapides
        const elapsedTime = Date.now() - startTime;
        const minDisplayTime = 500; // 0.5 seconde en millisecondes

        if (elapsedTime < minDisplayTime) {
          await new Promise((resolve) =>
            setTimeout(resolve, minDisplayTime - elapsedTime)
          );
        }

        this.loading = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
/* Conteneur principal stylisé comme un emballage Carambar */
.carambar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  /* 
    Création du motif caractéristique de l'emballage Carambar
    avec des bandes jaunes et beiges alternées sur les bords
  */
  background-color: #f1d834;
  background-image: linear-gradient(
    to right,
    #f1d834,
    #f1d834 40px,
    rgb(238, 234, 223) 40px,
    rgb(238, 234, 223) 44px,
    #f1d834 44px,
    #f1d834 60px,
    rgb(238, 234, 223) 60px,
    rgb(238, 234, 223) 64px,
    #f1d834 64px,
    #f1d834 calc(100% - 64px),
    rgb(238, 234, 223) calc(100% - 64px),
    rgb(238, 234, 223) calc(100% - 60px),
    #f1d834 calc(100% - 60px),
    #f1d834 calc(100% - 44px),
    rgb(238, 234, 223) calc(100% - 44px),
    rgb(238, 234, 223) calc(100% - 40px),
    #f1d834 calc(100% - 40px),
    #f1d834 100%
  );
  background-size: 100% 100%;
  background-position: center;
  min-height: 100vh;
}

/* Zone d'affichage du logo et du slogan */
.logo-container {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  max-width: 300px;
  height: auto;
}

.tagline {
  color: #b9580ef7; /* Brun Carambar */
  font-size: 1.2rem;
  margin-top: 0.5rem;
  font-weight: bold;
}

/* 
Zone d'affichage de la blague stylisée comme un papier Carambar
Position relative pour permettre le positionnement absolu du spinner
*/
.joke-paper {
  background-image: url("@/assets/papier.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  width: 80%;
  height: 190px;
  padding: 30px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: opacity 0.3s;
}

/* 
Conteneur du spinner positionné en absolu 
pour éviter de perturber la mise en page pendant le chargement 
*/
.spinner-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 2; // Pour s'assurer que le spinner soit au-dessus du texte
}

.loading-svg {
  width: 350px;
  height: 350px;
}

/* Styles communs pour tous les types de texte dans le papier */
.joke-text,
.error-text,
.placeholder-text {
  font-size: 1.2rem;
  color: #c32e21; /* Rouge Carambar */
  max-width: 70%; /* Limite la largeur du texte */
  word-wrap: break-word; /* Force le passage à la ligne */
  margin: 0 auto; /* Centre le bloc de texte */
}

/* Style spécifique pour les messages d'erreur */
.error-text {
  color: #d9534f;
}

/* 
Bouton stylisé comme un bonbon Carambar 
Positionné avec un décalage négatif pour créer un effet de superposition
*/
.candy-button {
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s;
  padding: 0;
  width: 1500px;
  margin-top: -400px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }

  /* Effets d'interaction pour un retour visuel */
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

/* Adaptation responsive pour différentes tailles d'écran */
@media (max-width: 768px) {
  .logo {
    max-width: 220px;
  }

  .joke-paper {
    padding: 20px;
  }

  .joke-text,
  .error-text,
  .placeholder-text {
    font-size: 1rem;
  }

  .candy-button {
    width: 150px;
  }
}
/* Ajustements supplémentaires pour les très petits écrans */
@media (max-width: 480px) {
  .carambar-container {
    padding: 15px;
  }

  .logo {
    max-width: 180px;
  }

  .tagline {
    font-size: 1rem;
  }

  .candy-button {
    width: 120px;
  }
}
</style>
