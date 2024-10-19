// backend/routes/achievements.js
const router = require('express').Router();
const Achievement = require('../models/Achievement');

// Добавление достижения пользователю
router.post('/', async (req, res) => {
  try {
    const achievement = new Achievement(req.body);
    await achievement.save();
    res.json(achievement);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Получение достижений пользователя
router.get('/:userId', async (req, res) => {
  try {
    const achievements = await Achievement.find({ userId: req.params.userId });
    res.json(achievements);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;
