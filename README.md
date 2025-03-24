# Weather App 🌤️

Проект погодного приложения, созданного с использованием Vite, Vue 3 и TypeScript, с данными от [WeatherAPI.com](https://www.weatherapi.com/api-explorer.aspx#current).

## 🚀 Особенности
⚡ Быстрое стартовое время благодаря Vite
🎨 Интуитивный интерфейс с Vue 3
🛠 Типобезопасность с TypeScript
🌦 Актуальные погодные данные от WeatherAPI
📱 Адаптивный дизайн для всех устройств
🌡 Подробная информация о текущей погоде и прогнозе

## 📦 Установка

Клонируйте репозиторий:
```bash
git clone https://github.com/gkhabada/weather.git
cd weather
```

Установите зависимости:
```bash
npm install
```

Создайте файл .env в корне проекта и добавьте ваш API ключ от WeatherAPI:
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

## 🏃 Запуск

Для запуска в режиме разработки:
```bash
npm run dev
```

Для сборки production версии:
```bash
npm run build
```

Для предпросмотра production сборки:
```bash
npm run preview
```

## 🛠 Технологии

Vite - Сборщик проекта
Vue 3 - Прогрессивный JavaScript-фреймворк
TypeScript - Язык программирования
WeatherAPI - Источник погодных данных
Pinia - Управление состоянием
Axios - HTTP клиент


## 🌐 API Использование
### Приложение использует следующие эндпоинты WeatherAPI:

Текущая погода: https://api.weatherapi.com/v1/current.json

Прогноз на 7 дней: https://api.weatherapi.com/v1/forecast.json

Поиск мест: https://api.weatherapi.com/v1/search.json

### Разработано с ❤️ для точных прогнозов и чистого кода!
