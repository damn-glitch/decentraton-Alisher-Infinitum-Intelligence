// backend/routes/auth.js
const router = require('express').Router();
const passport = require('passport');

// Инициализация стратегии
require('../auth/linkedin');

// Маршрут для аутентификации
router.get('/linkedin', passport.authenticate('linkedin'));

// Маршрут для обработки колбэка
router.get('/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: '/',
    failureRedirect: '/login',
}));

module.exports = router;
