/* ═══════════════════════════════════════════════
   projects.js — банк даних усіх занять
   Щоб додати нове заняття — скопіюйте об'єкт
   і заповніть поля. Сайт підтягне автоматично.
   ═══════════════════════════════════════════════ */

const PROJECTS = [
  {
    id: 1,
    slug: "session-1",
    title: "Вектор розвитку: STEM-орієнтири в курсі інформатики",
    shortDesc: "Тенденції STEM-освіти, інтеграція інформатики з іншими предметами, проєктне навчання, алгоритмічне та критичне мислення.",
    categories: ["all"],
    icon: "clock",
    iconColor: "purple",
    tags: [
      { label: "Методика", color: "blue" },
      { label: "Проєкти", color: "purple" }
    ],
    duration: "2 год",
    format: "очний + дистанційний",
    audience: "вчителі інформатики, STEM",
    equipment: [
      { name: "Комп'ютер / ноутбук", required: true },
      { name: "Проєктор або екран", required: true }
    ],
    subjects: ["Інформатика", "Технології", "Математика"],
    goals: [
      "Визначити основні вектори роботи творчої групи",
      "Проаналізувати потреби учасників",
      "Сформувати професійну спільноту педагогів",
      "Узгодити тематику та формати подальших занять"
    ],
    steps: [
      {
        title: "Сучасні тенденції STEM-освіти",
        detail: "Огляд концепції STEM, міжнародного досвіду, місця інформатики у STEM-підході."
      },
      {
        title: "Інтеграція предметів",
        detail: "Обговорення можливостей інтеграції інформатики з фізикою, математикою, природничими науками."
      },
      {
        title: "Проєктне навчання",
        detail: "Принципи організації проєктної діяльності, приклади успішних шкільних STEM-проєктів."
      },
      {
        title: "Алгоритмічне та критичне мислення",
        detail: "Методи розвитку обчислювального мислення учнів на уроках інформатики."
      },
      {
        title: "Формування спільноти",
        detail: "Визначення тематики подальших занять, узгодження форматів взаємодії."
      }
    ],
    tools: [],
    resources: [
      { name: "Презентація заняття", type: "drive", meta: "Google Drive · PDF", url: "#" },
      { name: "Програма лабораторії", type: "drive", meta: "Google Drive · DOCX", url: "#" }
    ],
    adaptNote: "Заняття не потребує спеціального обладнання — лише проєктор та бажання обговорювати. Ідеально підходить для початку будь-якої STEM-ініціативи у школі.",
    difficulty: { tech: 15, engagement: 65, equipment: 10 },
    featured: false
  },

  {
    id: 2,
    slug: "session-2",
    title: "Розумний будинок: знайомство зі SMART-технологіями",
    shortDesc: "Мікроконтролери, датчики, автоматизовані системи. Інтеграція інформатики, фізики та технологій у проєктній діяльності.",
    categories: ["smart"],
    icon: "home",
    iconColor: "amber",
    tags: [
      { label: "Smart Home", color: "amber" },
      { label: "IoT", color: "blue" }
    ],
    duration: "2–3 год",
    format: "очний",
    audience: "вчителі інформатики, фізики, технологій",
    equipment: [
      { name: "Мікроконтролер (Arduino / ESP)", required: true },
      { name: "Набір датчиків", required: true },
      { name: "Комп'ютер / ноутбук", required: true },
      { name: "Дротяна макетна плата", required: false }
    ],
    subjects: ["Інформатика", "Фізика", "Технології"],
    goals: [
      "Ознайомитися з основами SMART-технологій та IoT",
      "Опанувати принципи роботи автоматизованих систем",
      "Навчитися використовувати датчики у навчальних проєктах",
      "Розглянути приклади STEM-проєктів для школи"
    ],
    steps: [
      {
        title: "Вступ до IoT та Smart Home",
        detail: "Концепція інтернету речей, приклади розумних будинків, застосування у повсякденному житті."
      },
      {
        title: "Робота з мікроконтролерами",
        detail: "Знайомство з Arduino / ESP, підключення датчиків температури, освітленості, руху."
      },
      {
        title: "Створення моделі автоматизованої системи",
        detail: "Практична збірка схеми та написання простої програми керування."
      },
      {
        title: "Проєктний аналіз",
        detail: "Розбір готових навчальних STEM-проєктів, обговорення можливостей реалізації у школі."
      }
    ],
    tools: [
      { name: "Arduino IDE", type: "Середовище програмування", iconColor: "blue" },
      { name: "Tinkercad Circuits", type: "Симулятор схем", iconColor: "amber" }
    ],
    resources: [
      { name: "Презентація заняття", type: "drive", meta: "Google Drive · PDF", url: "#" },
      { name: "Схеми підключення датчиків", type: "drive", meta: "Google Drive · PDF", url: "#" },
      { name: "Arduino IDE (завантажити)", type: "link", meta: "Зовнішній ресурс", url: "https://www.arduino.cc/en/software" },
      { name: "Tinkercad Circuits", type: "link", meta: "Симулятор онлайн", url: "https://www.tinkercad.com" }
    ],
    adaptNote: "Без реального обладнання — повністю перейдіть у Tinkercad Circuits. Всі схеми та програми можна зібрати та протестувати онлайн у браузері без будь-якого заліза.",
    difficulty: { tech: 60, engagement: 75, equipment: 70 },
    featured: false
  },

  {
    id: 3,
    slug: "session-3",
    title: "Робототехніка та симуляції: micro:bit, Arduino, Tinkercad",
    shortDesc: "Програмування мікроконтролерів, створення віртуальних моделей. STEM-проєкти навіть без дорогого обладнання — через симулятори.",
    categories: ["robotics", "programming"],
    icon: "cpu",
    iconColor: "blue",
    tags: [
      { label: "Arduino", color: "blue" },
      { label: "micro:bit", color: "green" },
      { label: "Tinkercad", color: "amber" }
    ],
    duration: "2–3 год",
    format: "очний + дистанційний",
    audience: "вчителі інформатики, STEM, робототехніки",
    equipment: [
      { name: "micro:bit або Arduino", required: false },
      { name: "Комп'ютер / ноутбук", required: true },
      { name: "Інтернет", required: true }
    ],
    subjects: ["Інформатика", "Фізика", "Математика", "Технології"],
    goals: [
      "Опанувати платформи micro:bit та Arduino на базовому рівні",
      "Навчитися використовувати симулятор Tinkercad Circuits",
      "Створити першу програму для мікроконтролера",
      "Освоїти методику організації командної STEM-роботи"
    ],
    steps: [
      {
        title: "Огляд платформ",
        detail: "Порівняння micro:bit та Arduino: можливості, вартість, застосування у школі."
      },
      {
        title: "Перші програми у симуляторі",
        detail: "Tinkercad Circuits: збірка схеми, написання коду, запуск симуляції — все онлайн."
      },
      {
        title: "Практична робота з micro:bit",
        detail: "Програмування у MakeCode: блоки та JavaScript, перенесення на реальний пристрій."
      },
      {
        title: "Командні STEM-завдання",
        detail: "Робота в групах: кожна команда реалізує свій міні-проєкт за 20 хвилин."
      },
      {
        title: "Методика та оцінювання",
        detail: "Критерії оцінювання STEM-проєктів, організація командної роботи на уроці."
      }
    ],
    tools: [
      { name: "Tinkercad Circuits", type: "Симулятор схем онлайн", iconColor: "amber" },
      { name: "MakeCode", type: "Середовище для micro:bit", iconColor: "blue" },
      { name: "Arduino IDE", type: "Середовище програмування", iconColor: "teal" }
    ],
    resources: [
      { name: "Презентація заняття", type: "drive", meta: "Google Drive · PDF", url: "#" },
      { name: "Інструкція MakeCode", type: "drive", meta: "Google Drive · DOCX", url: "#" },
      { name: "Tinkercad — симулятор", type: "link", meta: "Онлайн, безкоштовно", url: "https://www.tinkercad.com" },
      { name: "MakeCode для micro:bit", type: "link", meta: "Онлайн, безкоштовно", url: "https://makecode.microbit.org" }
    ],
    adaptNote: "Заняття повністю адаптоване для шкіл без обладнання: Tinkercad Circuits та MakeCode — безкоштовні онлайн-сервіси, що працюють у будь-якому браузері. Реальний micro:bit або Arduino — бажані, але не обов'язкові.",
    difficulty: { tech: 50, engagement: 80, equipment: 40 },
    featured: false
  },

  {
    id: 4,
    slug: "session-4",
    title: "Codey Rocky у STEM-освіті: практичні кейси для уроків",
    shortDesc: "Алгоритми керування роботом, інтегровані міні-проєкти для уроків інформатики, обмін практичними напрацюваннями педагогів.",
    categories: ["robotics", "programming"],
    icon: "robot",
    iconColor: "teal",
    tags: [
      { label: "Codey Rocky", color: "green" },
      { label: "Алгоритми", color: "amber" }
    ],
    duration: "2–3 год",
    format: "очний",
    audience: "вчителі інформатики, робототехніки",
    equipment: [
      { name: "Робот Codey Rocky", required: true },
      { name: "Комп'ютер / ноутбук", required: true },
      { name: "mBlock (програма)", required: true },
      { name: "Смартфон (опційно)", required: false }
    ],
    subjects: ["Інформатика", "Математика", "Технології"],
    goals: [
      "Ознайомитися з можливостями робота Codey Rocky",
      "Навчитися створювати алгоритми керування роботом",
      "Розробити інтегровані міні-проєкти для уроків інформатики",
      "Обмінятися практичними напрацюваннями з робототехніки"
    ],
    steps: [
      {
        title: "Знайомство з Codey Rocky",
        detail: "Огляд робота: датчики, виконавчі механізми, можливості програмування у mBlock."
      },
      {
        title: "Блокове програмування",
        detail: "Перші програми у mBlock: рух, реакція на перешкоди, відтворення звуків та відображення на LED-матриці."
      },
      {
        title: "Алгоритмічні завдання",
        detail: "Практичні задачі: лабіринт, лінія, реакція на жести — учасники конкурують командами."
      },
      {
        title: "Розробка міні-проєктів",
        detail: "Кожен педагог розробляє власний навчальний сценарій для уроку з використанням Codey Rocky."
      },
      {
        title: "Презентація та обмін",
        detail: "Демонстрація напрацювань, обговорення ідей впровадження робототехніки у шкільній практиці."
      }
    ],
    tools: [
      { name: "mBlock", type: "Середовище програмування", iconColor: "blue" },
      { name: "Codey Rocky App", type: "Мобільний додаток", iconColor: "teal" }
    ],
    resources: [
      { name: "Презентація заняття", type: "drive", meta: "Google Drive · PDF", url: "#" },
      { name: "Картки алгоритмічних завдань", type: "drive", meta: "Google Drive · PDF", url: "#" },
      { name: "mBlock — завантажити", type: "link", meta: "Windows / macOS / Linux", url: "https://mblock.makeblock.com" },
      { name: "Посібник Codey Rocky", type: "link", meta: "Офіційна документація", url: "https://www.makeblock.com/steam-kits/codey-rocky" }
    ],
    adaptNote: "Без Codey Rocky — використайте безкоштовний онлайн-симулятор mBlock або замініть фізичного робота на Scratch-програмування: більшість алгоритмічних концепцій легко адаптуються для екранних персонажів.",
    difficulty: { tech: 55, engagement: 85, equipment: 75 },
    featured: false
  },

  {
    id: 5,
    slug: "session-5",
    title: "Від ідеї до 3D-друку за 20 хвилин: як вчителю створювати навчальні моделі",
    shortDesc: "AI-сервіси для генерації 3D-моделей, підготовка до друку у слайсері, практичне виготовлення навчальних об'єктів — повний цикл за одне заняття.",
    categories: ["3d", "ai"],
    icon: "cube",
    iconColor: "teal",
    tags: [
      { label: "3D-друк", color: "green" },
      { label: "AI-інструменти", color: "blue" },
      { label: "Meshy.ai · Cura", color: "amber" }
    ],
    duration: "2–3 год",
    format: "очний",
    audience: "вчителі інформатики, STEM, технологій",
    equipment: [
      { name: "3D-принтер", required: true },
      { name: "Комп'ютер / ноутбук", required: true },
      { name: "Інтернет", required: true },
      { name: "Смартфон / камера", required: false }
    ],
    subjects: ["Інформатика", "Технології", "Фізика", "Математика", "Біологія", "Мистецтво"],
    goals: [
      "Ознайомити з AI-сервісами генерації 3D-моделей за текстом та зображенням",
      "Опанувати підготовку моделей до 3D-друку у слайсері",
      "Створити власний навчальний об'єкт для застосування на уроці",
      "Показати можливості 3D-друку для різних шкільних предметів"
    ],
    steps: [
      {
        title: "Огляд AI-сервісів для 3D-моделювання",
        detail: "Демонстрація Meshy.ai, Luma AI, Spline та інших. Порівняння: текстовий промпт vs фото-референс."
      },
      {
        title: "Практична генерація моделі",
        detail: "Кожен учасник самостійно генерує 3D-модель навчального об'єкта. Обговорення промптів та ітерацій."
      },
      {
        title: "Підготовка до друку у слайсері",
        detail: "Ultimaker Cura: масштабування, розташування, підтримки, параметри друку для навчальних моделей."
      },
      {
        title: "Друк, рефлексія та застосування",
        detail: "Друк виробу, обговорення застосування на уроках різних предметів. Формування банку ідей."
      }
    ],
    tools: [
      { name: "Meshy.ai", type: "AI → 3D-модель (текст)", iconColor: "teal" },
      { name: "Ultimaker Cura", type: "Слайсер для 3D-друку", iconColor: "blue" },
      { name: "Luma AI", type: "Фото → 3D-модель", iconColor: "green" },
      { name: "Spline", type: "3D-редактор у браузері", iconColor: "amber" }
    ],
    resources: [
      { name: "Презентація заняття", type: "drive", meta: "Google Drive · PDF", url: "#" },
      { name: "Інструкція зі слайсингу", type: "drive", meta: "Google Drive · DOCX", url: "#" },
      { name: "Meshy.ai", type: "link", meta: "AI-генерація 3D онлайн", url: "https://www.meshy.ai" },
      { name: "Ultimaker Cura", type: "link", meta: "Безкоштовний слайсер", url: "https://ultimaker.com/software/ultimaker-cura" },
      { name: "Відеозапис майстер-класу", type: "video", meta: "YouTube · 47 хв", url: "#" }
    ],
    adaptNote: "Без 3D-принтера — зупиніться на етапі цифрової моделі: учні опановують промптинг та 3D-проєктування. Готові .stl-файли можна надіслати до найближчого FabLab або бібліотеки з принтером. Spline та Tinkercad 3D працюють повністю онлайн.",
    difficulty: { tech: 50, engagement: 90, equipment: 60 },
    featured: true
  }
];
