export interface Language {
  id: string;
  name: string;
  flag: string;
  api: string;
  article: string;
}

export const LANGUAGES: Language[] = [
  {
    id: "en",
    name: "English",
    flag: "https://hatscripts.github.io/circle-flags/flags/us.svg",
    api: "https://en.wikipedia.org/w/api.php?",
    article: "https://en.wikipedia.org/wiki/",
  },
  {
    id: "de",
    name: "Deutsch",
    flag: "https://hatscripts.github.io/circle-flags/flags/de.svg",
    api: "https://de.wikipedia.org/w/api.php?",
    article: "https://de.wikipedia.org/wiki/",
  },
  {
    id: "fr",
    name: "Français",
    flag: "https://hatscripts.github.io/circle-flags/flags/fr.svg",
    api: "https://fr.wikipedia.org/w/api.php?",
    article: "https://fr.wikipedia.org/wiki/",
  },
  {
    id: "es",
    name: "Español",
    flag: "https://hatscripts.github.io/circle-flags/flags/es.svg",
    api: "https://es.wikipedia.org/w/api.php?",
    article: "https://es.wikipedia.org/wiki/",
  },
  {
    id: "it",
    name: "Italiano",
    flag: "https://hatscripts.github.io/circle-flags/flags/it.svg",
    api: "https://it.wikipedia.org/w/api.php?",
    article: "https://it.wikipedia.org/wiki/",
  },
  {
    id: "pt",
    name: "Português",
    flag: "https://hatscripts.github.io/circle-flags/flags/br.svg",
    api: "https://pt.wikipedia.org/w/api.php?",
    article: "https://pt.wikipedia.org/wiki/",
  },
  {
    id: "ru",
    name: "Русский",
    flag: "https://hatscripts.github.io/circle-flags/flags/ru.svg",
    api: "https://ru.wikipedia.org/w/api.php?",
    article: "https://ru.wikipedia.org/wiki/",
  },
  {
    id: "zh",
    name: "中文",
    flag: "https://hatscripts.github.io/circle-flags/flags/cn.svg",
    api: "https://zh.wikipedia.org/w/api.php?",
    article: "https://zh.wikipedia.org/wiki/",
  },
  {
    id: "ja",
    name: "日本語",
    flag: "https://hatscripts.github.io/circle-flags/flags/jp.svg",
    api: "https://ja.wikipedia.org/w/api.php?",
    article: "https://ja.wikipedia.org/wiki/",
  },
  {
    id: "ar",
    name: "العربية",
    flag: "https://hatscripts.github.io/circle-flags/flags/sa.svg",
    api: "https://ar.wikipedia.org/w/api.php?",
    article: "https://ar.wikipedia.org/wiki/",
  },
  {
    id: "fa",
    name: "فارسی",
    flag: "https://hatscripts.github.io/circle-flags/flags/ir.svg",
    api: "https://fa.wikipedia.org/w/api.php?",
    article: "https://fa.wikipedia.org/wiki/",
  },
  {
    id: "he",
    name: "עברית",
    flag: "https://hatscripts.github.io/circle-flags/flags/il.svg",
    api: "https://he.wikipedia.org/w/api.php?",
    article: "https://he.wikipedia.org/wiki/",
  },
  {
    id: "hi",
    name: "हिन्दी",
    flag: "https://hatscripts.github.io/circle-flags/flags/in.svg",
    api: "https://hi.wikipedia.org/w/api.php?",
    article: "https://hi.wikipedia.org/wiki/",
  },
  {
    id: "eu",
    name: "Euskara",
    flag: "https://hatscripts.github.io/circle-flags/flags/es-pv.svg",
    api: "https://eu.wikipedia.org/w/api.php?",
    article: "https://eu.wikipedia.org/wiki/",
  },
  {
    id: "tr",
    name: "Türkçe",
    flag: "https://hatscripts.github.io/circle-flags/flags/tr.svg",
    api: "https://tr.wikipedia.org/w/api.php?",
    article: "https://tr.wikipedia.org/wiki/",
  },
  {
    id: "id",
    name: "Indonesian",
    flag: "https://hatscripts.github.io/circle-flags/flags/id.svg",
    api: "https://id.wikipedia.org/w/api.php?",
    article: "https://id.wikipedia.org/wiki/",
  },
  {
    id: "cs",
    name: "Čeština",
    flag: "https://hatscripts.github.io/circle-flags/flags/cz.svg",
    api: "https://cs.wikipedia.org/w/api.php?",
    article: "https://cs.wikipedia.org/wiki/",
  },
  {
    id: "sk",
    name: "Slovenčina",
    flag: "https://hatscripts.github.io/circle-flags/flags/sk.svg",
    api: "https://sk.wikipedia.org/w/api.php?",
    article: "https://sk.wikipedia.org/wiki/",
  },
  {
    id: "pl",
    name: "Polski",
    flag: "https://hatscripts.github.io/circle-flags/flags/pl.svg",
    api: "https://pl.wikipedia.org/w/api.php?",
    article: "https://pl.wikipedia.org/wiki/",
  },
  {
    id: "nl",
    name: "Nederlands",
    flag: "https://hatscripts.github.io/circle-flags/flags/nl.svg",
    api: "https://nl.wikipedia.org/w/api.php?",
    article: "https://nl.wikipedia.org/wiki/",
  },
  {
    id: "ur",
    name: "اردو",
    flag: "https://hatscripts.github.io/circle-flags/flags/pk.svg",
    api: "https://ur.wikipedia.org/w/api.php?",
    article: "https://ur.wikipedia.org/wiki/",
  }
];
