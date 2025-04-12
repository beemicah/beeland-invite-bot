const TelegramBot = require('node-telegram-bot-api');

// Замените на ваш токен
const token = '7863958084:AAGjHtKbgsQAqE45k4dxgak0UH4-PW5aI6c';

const bot = new TelegramBot(token, { polling: true });

// Команда /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name}! Добро пожаловать в BEELAND 🐝\n\nИспользуй /form чтобы подать заявку!`);
});

// Команда /form
bot.onText(/\/form/, (msg) => {
  bot.sendMessage(msg.chat.id, `📝 Анкета для вступления в поселение BEELAND:\nhttps://docs.google.com/forms/d/e/1FAIpQLSf_1JPkWv5JfhgxtWefoVdEo5uo-bAdRUdOtMf3JH9xWeQf5A/viewform?usp=headerа`);
});

// Команда /residents
bot.onText(/\/residents/, (msg) => {
  const residents = `
📜 Список жителей BEELAND:
🐝 beemicah — Основатель
👑 honeyabigail — Королева
🌸 kse_shaa — Жительница
😯 REGENTUM — Управляющий
🍯 Minori_Omori — Творческая душа
🌼 Damaris345 — Приключения
🪢 ZsFFirKA — Осваивается
💰 MaksimDov — Мультимиллионер
👣 chuvachokkk — Новый житель
🌀 InfiniteAmethyst — Новый житель
🎀 Viika — (исключена)
`;
  bot.sendMessage(msg.chat.id, residents);
});

// Команда /info
bot.onText(/\/info/, (msg) => {
  bot.sendMessage(msg.chat.id, `🐝 BEELAND — уютное поселение внутри PLAYMATIX!\nМы строим, развиваемся и приглашаем активных игроков присоединиться.\nАнкета: /form`);
});

// Команда /quest
bot.onText(/\/quest/, (msg) => {
  const quests = [
    "🗺 Найди заброшенную деревню в джунглях!",
    "⚒️ Принеси 32 булыжника для стройки!",
    "🌲 Посади 5 деревьев вокруг деревни!",
    "🐔 Приручи курицу и назови её Боня.",
    "🔥 Построй уютный костёр для вечера у дома."
  ];
  const randomQuest = quests[Math.floor(Math.random() * quests.length)];
  bot.sendMessage(msg.chat.id, `🎯 Твой квест:\n${randomQuest}`);
});

// Команда /fortune
bot.onText(/\/fortune/, (msg) => {
  const fortunes = [
    "🔮 Сегодня ты найдёшь клад, даже если не будешь искать.",
    "✨ Кто-то рядом мечтает с тобой построить ульи.",
    "🐝 Пчёлы сегодня шепчут тебе удачу в оба уха!",
    "🍀 Ты счастливчик дня — используй это с умом!",
    "🌈 После дождя обязательно будет твоя радуга."
  ];
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  bot.sendMessage(msg.chat.id, `🧙 Предсказание:\n${randomFortune}`);
});

// Команда /daily
bot.onText(/\/daily/, (msg) => {
  const dailyFacts = [
    "📌 Факт дня: Пчёлы могут запоминать человеческие лица.",
    "📌 Факт дня: Один улей может дать до 30 кг мёда в год.",
    "📌 Факт дня: В Minecraft пчёлы боятся дождя и прячутся.",
    "📌 Факт дня: Самая старая пчела в игре — пчелинная королева из Forestry.",
    "📌 Факт дня: Пчёлы танцуют, чтобы сообщать о цветах!"
  ];
  const randomDaily = dailyFacts[Math.floor(Math.random() * dailyFacts.length)];
  bot.sendMessage(msg.chat.id, `📅 Ежедневка:\n${randomDaily}`);
});

// Команда /help — Список доступных команд
bot.onText(/\/help/, (msg) => {
  const helpText = `
🤖 Список команд BEELAND INVITE BOT:

/start — Приветственное сообщение 🐝
/form — Анкета для вступления ✍️
/residents — Список жителей 📜
/info — О поселении 🌻
/quest — Случайный квест 🎯
/fortune — Весёлое предсказание 🔮
/daily — Ежедневный факт или задание 📅
/help — Все команды 🛠️
  `;
  bot.sendMessage(msg.chat.id, helpText);
});
