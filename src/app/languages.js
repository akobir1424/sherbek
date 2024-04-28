import i18next from "i18next";

i18next.init({
  debug: true,
  lng: "en",
  resources: {
    en: {
      translation: {
        key: "hello worldddddd",
      },
    },
  },
});
console.log(i18next.t("unknown"));
