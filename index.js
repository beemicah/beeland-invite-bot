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

// Команда /help — Список доступных команд
bot.onText(/\/help/, (msg) => {
  const helpText = `
🤖 Список команд BEELAND INVITE BOTt:

/start — Приветственное сообщение 🐝
/form — Анкета для вступления в поселение ✍️
/residents — Текущий список поселенцев 📜
/info — Информация о BEELAND 🌻
/help — Этот список команд 🛠️
  `;
  bot.sendMessage(msg.chat.id, helpText);
});

// Команда /quest
bot.command('quest', (ctx) => {
  const quests = [
    'Построй домик из дерева и камня',
    'Добудь 10 меда и поделись с соседом',
    'Познакомься с тремя жителями деревни',
    'Принеси редкий блок для украшения деревни',
    'Сделай фото своего участка и выложи в чат'
  ];
  const quest = quests[Math.floor(Math.random() * quests.length)];
  ctx.reply(`🎯 Твой квест: ${quest}`);
});

// Команда /fortune
bot.command('fortune', (ctx) => {
  const fortunes = [
    'Сегодня твоя кирка принесёт удачу',
    'Не копай прямо вниз… хотя кто знает',
    'Пчёлы шепчут: не забудь улыбнуться другу!',
    'На твоём пути скоро будет сюрприз',
    'Ты сегодня главный в деревне — используй это мудро'
  ];
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  ctx.reply(`🔮 Предсказание: ${fortune}`);
});

// Команда /daily
bot.command('daily', (ctx) => {
  const dailies = [
    'Факт: Пчёлы могут запоминать лица!',
    'Задание: укрась своё жилище цветами!',
    'Факт: В улье всегда есть порядок и роль для каждого',
    'Задание: помоги новичку обустроиться!',
    'Факт: Мед — это еда, лекарство и валюта в BeeLand'
  ];
  const daily = dailies[Math.floor(Math.random() * dailies.length)];
  ctx.reply(`📅 Сегодня: ${daily}`);
});

bot.launch();

// Обработка ошибок
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('🤖 BeeLand Invite Bot запущен!');
