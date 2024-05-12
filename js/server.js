const express = require('express');
const app = express();
const PORT = 3000; // Порт, на котором будет запущен сервер

// Разрешить серверу обрабатывать JSON-данные
app.use(express.json());

// Основной маршрут для проверки работоспособности сервера
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const mongoose = require('mongoose');

// Строка подключения к MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to MongoDB!");
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String
});

const User = mongoose.model('User', userSchema);


app.post('/users', (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(() => res.send('User added successfully'))
    .catch(err => res.status(400).send('Error saving user'));
});
