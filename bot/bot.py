# bot/bot.py
import logging
from aiogram import Bot, Dispatcher, types, executor

API_TOKEN = '7984703996:AAFYDTD4MkuoqMmRpREIKN8ascmcQBcMxdM'

logging.basicConfig(level=logging.INFO)
bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)

# Обработка команды /start
@dp.message_handler(commands=['start'])
async def send_welcome(message: types.Message):
    await message.reply("Добро пожаловать в HR-платформу!")

# Добавление кнопки для запуска Web App
@dp.message_handler(commands=['webapp'])
async def send_webapp(message: types.Message):
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
    web_app_info = types.WebAppInfo(url="https://your-web-app-url.com")
    button = types.KeyboardButton(text="Открыть HR-платформу", web_app=web_app_info)
    keyboard.add(button)
    await message.answer("Нажмите кнопку ниже, чтобы открыть HR-платформу.", reply_markup=keyboard)

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
