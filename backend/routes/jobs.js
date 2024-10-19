// backend/routes/jobs.js
const router = require('express').Router();
const Job = require('../models/Job');

// Создание вакансии
router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Получение списка вакансий с фильтрацией
router.get('/', async (req, res) => {
  const { skills, isRemote } = req.query;
  const filter = {};
  if (skills) filter.skillsRequired = { $in: skills.split(',') };
  if (isRemote) filter.isRemote = isRemote === 'true';
  try {
    const jobs = await Job.find(filter);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;
