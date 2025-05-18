// src/services/JokeService.ts

/**
 * Service de gestion des requêtes API liées aux blagues
 * Ce module encapsule toutes les interactions avec l'API de blagues,
 * isolant ainsi la logique de communication HTTP du reste de l'application.
 * Cette séparation facilite les tests et permet de changer l'implémentation
 * sous-jacente sans impacter les composants qui utilisent ce service.
 */

import axios from "axios";
import { Joke } from "@/types/Joke";
import { env } from "@/config/env";

/**
 * Client HTTP préconfigié pour communiquer avec l'API
 * Utilise la configuration d'environnement pour l'URL de base
 * et définit les en-têtes par défaut pour toutes les requêtes.
 * Cette instance est privée au module pour maintenir l'encapsulation.
 */
const apiClient = axios.create({
  baseURL: env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Service exporté avec méthodes d'accès aux données de l'API
 */
export default {
  /**
   * Récupère une blague aléatoire depuis l'API
   * @returns Promise résolvant vers un objet Joke
   * @throws Erreur HTTP en cas d'échec de la requête
   * Note: Les erreurs ne sont pas gérées ici mais propagées
   * au composant appelant pour permettre une gestion contextuelle.
   */
  async getRandomJoke(): Promise<Joke> {
    const response = await apiClient.get<Joke>("/api/v1/jokes/random");
    return response.data;
  },
};
