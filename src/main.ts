// src/main.ts

/**
 * Point d'entrée principal de l'application
 *
 * Ce fichier initialise l'application Vue.js, configure les plugins globaux
 * et monte l'instance de l'application sur l'élément DOM racine.
 * C'est ici que se font toutes les configurations globales de l'application.
 */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/**
 * Import des styles Bootstrap
 * Note: Seule la partie CSS est importée ici, si les composants JavaScript
 * de Bootstrap sont nécessaires, ils devront être importés et configurés séparément.
 */
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Création et configuration de l'instance Vue
 *
 * La chaîne d'appels de méthodes :
 * 1. Crée une nouvelle instance d'application Vue
 * 2. Enregistre le routeur pour gérer la navigation
 * 3. Monte l'application sur l'élément DOM avec l'id "app"
 *
 * Cette approche offre un point unique où toutes les configurations
 * globales (plugins, directives, mixins) peuvent être ajoutées.
 */
createApp(App).use(router).mount("#app");
