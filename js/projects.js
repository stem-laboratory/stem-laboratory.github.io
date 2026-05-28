/* ═══════════════════════════════════════════════
   projects.js — дані всіх занять STEM-лабораторії
   Щоб додати нове заняття — скопіюйте об'єкт
   ═══════════════════════════════════════════════ */

const PROJECTS = [
  {
    id: 1, slug: "session-1", file: "projects/session-1.html",
    title: "Вектор розвитку: STEM-орієнтири в курсі інформатики",
    shortDesc: "Організаційне засідання. Діагностика потреб учасників, STEM-радар компетентностей, формування спільноти.",
    categories: ["all"], accentColor: "#534AB7", accentLight: "#EEEDFE", accentDark: "#26215C",
    tags: [{ label: "Методика", cls: "tag-purple" }, { label: "STEM-радар", cls: "tag-blue" }],
  },
  {
    id: 2, slug: "session-2", file: "projects/session-2.html",
    title: "Розумний будинок: знайомство зі SMART-технологіями",
    shortDesc: "Мікроконтролери, датчики, автоматизовані системи. Практикум у гімназії №89. 16 учасників, оцінка 4.8/5.",
    categories: ["smart"], accentColor: "#185FA5", accentLight: "#E6F1FB", accentDark: "#042C53",
    tags: [{ label: "Smart Home", cls: "tag-amber" }, { label: "IoT", cls: "tag-blue" }],
  },
  {
    id: 3, slug: "session-3", file: "projects/session-3.html",
    title: "Робототехніка та симуляції: micro:bit, Arduino, Tinkercad",
    shortDesc: "Програмування мікроконтролерів, симулятори. 14 учасників, середня оцінка Tinkercad 4.5/5.",
    categories: ["robotics", "programming"], accentColor: "#0F6E56", accentLight: "#E1F5EE", accentDark: "#04342C",
    tags: [{ label: "Arduino", cls: "tag-blue" }, { label: "Tinkercad", cls: "tag-teal" }],
  },
  {
    id: 4, slug: "session-4", file: "projects/session-4.html",
    title: "Codey Rocky у STEM-освіті: практичні кейси для уроків",
    shortDesc: "Алгоритми керування роботом. 9 учасників, корисність 4.8/5, зрозумілість 5.0/5.",
    categories: ["robotics", "programming"], accentColor: "#534AB7", accentLight: "#EEEDFE", accentDark: "#26215C",
    tags: [{ label: "Codey Rocky", cls: "tag-purple" }, { label: "mBlock", cls: "tag-blue" }],
  },
  {
    id: 5, slug: "session-5", file: "projects/session-5.html",
    title: "Від ідеї до 3D-друку за 20 хвилин: як вчителю створювати навчальні моделі",
    shortDesc: "AI-сервіси + 3D-друк. 10 учасників, рейтинг 5.0/5 — найвища оцінка серед усіх занять.",
    categories: ["3d", "ai"], accentColor: "#993C1D", accentLight: "#FAECE7", accentDark: "#4A1B0C",
    tags: [{ label: "AI-інструменти", cls: "tag-blue" }, { label: "3D-друк", cls: "tag-teal" }],
    featured: true,
  },
];
