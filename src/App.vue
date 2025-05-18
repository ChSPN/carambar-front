<!-- src/App.vue -->

<!--
  Composant racine de l'application
  
  Ce composant sert de point d'entrée principal et de conteneur pour toute l'application.
  Sa structure est volontairement minimaliste pour déléguer la logique métier
  et l'interface utilisateur aux composants enfants spécialisés.
-->

<template>
  <!-- 
    Affiche uniquement le composant principal de l'application
    Cette approche favorise une architecture modulaire où le composant racine
    agit comme un simple conteneur
  -->
  <JokeComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JokeComponent from "@/components/JokeComponent.vue";

/**
 * Composant racine de l'application
 * Déclare et monte le composant principal JokeComponent
 */
export default defineComponent({
  name: "App",
  components: {
    JokeComponent,
  },
});
</script>

<style>
/**
 * Styles globaux de l'application
 * 
 * Note: Ces styles ne sont pas 'scoped' intentionnellement pour qu'ils
 * s'appliquent à l'ensemble de l'application. Ils définissent les règles
 * de base pour normaliser l'affichage à travers les différents navigateurs.
 */
body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
}

/* 
  Garantit que l'application occupe au minimum toute la hauteur de la fenêtre,
  évitant ainsi des sauts visuels lors des transitions de contenu 
*/
#app {
  min-height: 100vh;
}
</style>
