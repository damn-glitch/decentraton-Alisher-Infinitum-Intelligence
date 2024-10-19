// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/hr-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Подключено к MongoDB');
}).catch((err) => {
  console.error('Ошибка подключения к MongoDB', err);
});

// Мидлвары
app.use(cors());
app.use(express.json());

// Подключение маршрутов
const userRoutes = require('./routes/users');
const jobRoutes = require('./routes/jobs');
const recommendationRoutes = require('./routes/recommendations');
const achievementRoutes = require('./routes/achievements');
const paymentRoutes = require('./routes/payments');
const authRoutes = require('./routes/auth');

app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/auth', authRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
