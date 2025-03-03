import { Telegraf, Markup } from "telegraf";

const token = "7910311738:AAHhvYH2U4K8dGTvTSTCKtxB0IDuc-l4fwE";
const webAppUrl = "https://roman-clicker.web.app";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Привет! Ты мне нравишься ❤️",
    Markup.inlineKeyboard([
      Markup.button.webApp(
        "Open the game 🎮",
        `${webAppUrl}?ref=${ctx.payload}`
      ),
    ])
  );
});

bot.launch();
