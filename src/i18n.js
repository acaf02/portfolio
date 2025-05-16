import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // Lê arquivos de tradução via HTTP (ex: public/locales)
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Integração com React
  .init({
    fallbackLng: "pt-BR", // Idioma padrão se o detectado não for suportado
    supportedLngs: ["pt-BR", "en-US"], // Idiomas permitidos

    debug: false, // Pode ser true para desenvolvimento

    interpolation: {
      escapeValue: false, 
    },

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Caminho dos arquivos de tradução
    },

    react: {
      useSuspense: false, // Desabilita Suspense (útil para SSR ou testes)
    },
  });

export default i18n;
