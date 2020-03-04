const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1073634781:AAGfVIUXqM1EpS2vxybkkt_T6cIx6GlamBM';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'Hello World!');
});
