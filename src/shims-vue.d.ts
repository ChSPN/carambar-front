// src/shims-vue.d.ts

/**
 * Déclarations de types pour les fichiers Vue
 *
 * Ce fichier permet à TypeScript de reconnaître les fichiers .vue comme des modules
 * importables et de leur associer un type approprié. Sans cette déclaration,
 * TypeScript signalerait une erreur lors de l'import de fichiers .vue.
 *
 * Note: Ce fichier est généralement généré automatiquement par Vue CLI et ne
 * nécessite pas de modifications manuelles sauf pour des cas spécifiques.
 */

/* eslint-disable */
// Désactivation d'ESLint est nécessaire car la syntaxe de déclaration de module
// peut parfois déclencher des règles de linting qui ne sont pas pertinentes ici

/**
 * Déclare le type des composants Vue importés depuis des fichiers .vue
 * 
 * Cette déclaration permet d'utiliser l'instruction:
 * import MyComponent from './MyComponent.vue'
 * tout en conservant le support du typage TypeScript.
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  
  // Le composant est typé avec des objets vides pour les props et les émissions
  // et 'any' pour le contexte, ce qui est un compromis entre la sécurité de type
  // et la flexibilité dans un environnement de compilation SFC (Single File Component)
  const component: DefineComponent<{}, {}, any>;
  
  export default component;
}
