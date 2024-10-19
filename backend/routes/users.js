// backend/routes/users.js
const router = require('express').Router();
const User = require('../models/User');

// Создание или обновление пользователя
router.post('/', async (req, res) => {
  const { telegramId, name, skills, experience, role } = req.body;
  try {
    let user = await User.findOne({ telegramId });
    if (user) {
      user.name = name;
      user.skills = skills;
      user.experience = experience;
      user.role = role;
    } else {
      user = new User({ telegramId, name, skills, experience, role });
    }
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Получение пользователя
router.get('/:telegramId', async (req, res) => {
  try {
    const user = await User.findOne({ telegramId: req.params.telegramId });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;
