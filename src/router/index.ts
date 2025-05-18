// src/router/index.ts

/**
 * Configuration du routeur de l'application
 * Ce module initialise et configure Vue Router pour gérer la navigation
 * dans l'application single-page. Il définit la stratégie d'historique
 * et exporte une instance de routeur prête à l'emploi.
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

/**
 * Tableau de définition des routes de l'application
 * Actuellement vide, les routes peuvent être:
 * - Ajoutées directement ici
 * - Importées depuis des modules externes
 * - Générées dynamiquement
 
 * Chaque route doit suivre l'interface RouteRecordRaw de Vue Router
 */
const routes: Array<RouteRecordRaw> = [];

/**
 * Instance du routeur configurée avec l'historique HTML5
 * Utilise createWebHistory pour permettre une navigation avec URLs propres
 * sans hachage (#), nécessitant une configuration serveur appropriée.
 * BASE_URL provient des variables d'environnement et permet le déploiement
 * dans un sous-répertoire si nécessaire.
 */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
