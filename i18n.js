import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "add-board": "Add board",
      "my-boards": "My boards",
      "logout": "Logout",
      "title": "Title",
      "description": "Description",
      "priority": "Priority",
      "legend-add-todo": "It will add in board *To do*",
      "priority-low": "Low",
      "priority-medium": "Medium",
      "priority-high": "High",
      "submit": "Submit",
      "to-do": "To Do",
      "for-review": "For Review",
      "done": "Done"
    }
  },
  es: {
    translation: {
      "add-board": "Agregar tablero",
      "my-boards": "Mis tableros",
      "logout": "Salir",
      "title": "Título",
      "description": "Descripción",
      "priority": "Prioridad",
      "legend-add-todo": "Será agregado en el tablero *Por hacer*",
      "priority-low": "Baja",
      "priority-medium": "Media",
      "priority-high": "Alta",
      "submit": "Enviar",
      "to-do": "Por hacer",
      "for-review": "Para revisión",
      "done": "Terminado"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl',
    fallbackLng: 'en'
  });

export default i18n;
