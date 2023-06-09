const TelegramBot = require('node-telegram-bot-api');

// Telegram Bot Token
const token = '6009024026:AAHcc3g8lEz_e78vyzpReaSYCKjQC03EoT4';

// Create a new bot instance
const bot = new TelegramBot(token, { polling: true });

// Handle the /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = 'Welcome to the bot! Send me a message and I will respond.';
  
  bot.sendMessage(chatId, message);
});

// Handle incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const message = `I received your message: ${msg.text}`;

  bot.sendMessage(chatId, message);
});
