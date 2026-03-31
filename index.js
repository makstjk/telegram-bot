const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

// START
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Салом 👋
Ба системаи SOLIM PHARM хуш омадед!

Меню:
1️⃣ Прайс бин
2️⃣ Статуси заказ
3️⃣ Тамос бо оператор`);
});

// ПРАЙС
bot.onText(/1/, (msg) => {
  bot.sendMessage(msg.chat.id, "📦 Прайс ҳоло дастрас нест (баъд пайваст мекунем)");
});

// СТАТУС
bot.onText(/2/, (msg) => {
  bot.sendMessage(msg.chat.id, "📊 Барои дидани статус кодатонро нависед:");
});

// КОД
bot.on('message', (msg) => {
  if (msg.text && msg.text.startsWith("N")) {
    bot.sendMessage(msg.chat.id, `📦 Заказ: ${msg.text}

👨‍💼 Оператор: қабул шуд
📦 Сборка: тайёр
✅ Проверка: гузашт
🚚 Доставка: дар роҳ

📞 Такси: 900000000`);
  }
});

// ТАМОС
bot.onText(/3/, (msg) => {
  bot.sendMessage(msg.chat.id, "📞 Барои тамос: +992XXXXXXXXX");
});

console.log("Bot started...");
