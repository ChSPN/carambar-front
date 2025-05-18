// src/types/Joke.ts

/**
 * Interface représentant la structure d'une blague Carambar
 *
 * Cette interface définit le contrat de données pour les objets de type "blague"
 * utilisés dans l'application. Elle assure la cohérence entre les données reçues
 * de l'API et leur utilisation dans les composants d'interface utilisateur.
 */
export interface Joke {
  /** Identifiant unique de la blague */
  id: number;
  /** Contenu textuel de la blague */
  text: string;
  /**
   * Date de création de la blague au format ISO 8601
   * Exemple: "2023-05-15T14:30:00Z"
   */
  createdAt: string;
  /**
   * Date de dernière modification de la blague au format ISO 8601
   * Exemple: "2023-05-15T14:30:00Z"
   */
  updatedAt: string;
}
