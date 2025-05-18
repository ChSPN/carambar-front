// src/config/env.ts
/**
 * Module de configuration d'environnement
 * Ce fichier centralise l'accès aux variables d'environnement de l'application,
 * ce qui permet de :
 * - Avoir un point unique de gestion des variables d'environnement
 * - Définir des valeurs par défaut sécurisées
 * - Faciliter les tests en permettant la substitution de ces valeurs
 */

/**
 * Interface définissant la structure de configuration d'environnement
 */
interface EnvConfig {
  API_BASE_URL: string;
}
/**
 * Récupère et normalise les variables d'environnement
 * Applique des valeurs par défaut lorsque les variables ne sont pas définies
 */
function getEnvConfig(): EnvConfig {
  return {
    // Utilise la variable d'environnement si disponible, sinon repli sur "/"
    // VUE_APP_ est le préfixe standard pour les variables d'environnement Vue.js
    API_BASE_URL: process.env.VUE_APP_API_BASE_URL || "/",
  };
}

export const env = getEnvConfig();
