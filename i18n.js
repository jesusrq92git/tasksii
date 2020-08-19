import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "english": "English",
      "spanish": "Spanish",
      "login": "Login",
      "register": "Register",
      "email-address": "Email address",
      "password": "Password",
      "confirm-pwd": "Confirm password",
      "error-login-1": "Error! Passwords don't match...",
      "error-login-2": "Error! Invalid username or password, try again ...",
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
      "board": "Board",
      "btn-close": "Close",
      "btn-save": "Save",
      "submit": "Submit",
      "to-do": "To do",
      "for-review": "For review",
      "done": "Done"
    }
  },
  es: {
    translation: {
      "english": "Inglés",
      "spanish": "Español",
      "login": "Iniciar sesión",
      "register": "Registrar",
      "email-address": "Dirección de correo",
      "password": "Contraseña",
      "confirm-pwd": "Confirmar contraseña",
      "error-login-1": "Error! Las contraseñas no coinciden...",
      "error-login-2": "Error! Usuario o contraseña inválidos, intenta de nuevo...",
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
      "board": "Tablero",
      "btn-close": "Cerrar",
      "btn-save": "Guardar",
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
