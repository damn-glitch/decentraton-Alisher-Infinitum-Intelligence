// backend/routes/recommendations.js
const router = require('express').Router();
const openai = require('../services/ai');
const Job = require('../models/Job');
const User = require('../models/User');

router.get('/jobs/:telegramId', async (req, res) => {
  try {
    const user = await User.findOne({ telegramId: req.params.telegramId });
    const jobs = await Job.find();

    // Подготовка данных для AI
    const prompt = `
      Найди наиболее подходящие вакансии для кандидата с навыками: ${user.skills.join(', ')}.
      Список вакансий:
      ${jobs.map((job) => `Вакансия: ${job.title}, Навыки: ${job.skillsRequired.join(', ')}`).join('\n')}
      Верни 5 наиболее подходящих вакансий в формате JSON:
      [{"jobId": "...", "score": ...}, ...]
    `;

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 500,
    });

    // Обработка ответа от AI
    const recommendations = JSON.parse(response.data.choices[0].text.trim());
    res.json({ recommendations });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;
