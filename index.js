const express = require("express"); //Подключаем библеотеку express
const mongoose = require("mongoose"); //Подключаем библеотеку mongoose
const indexRouter = require("./routes/index"); //Подключает папку routes и файл index

mongoose //Подключает базу данных
  .connect( //Коннектит в компас
    "mongodb+srv://tepsurkaev:SgTrNSS_2003@cluster0.neogw.mongodb.net/blog", //Сылка на компас
    {
      useNewUrlParser: true, //¯\_(ツ)_/¯ Ахьмад сказал прописать
      useUnifiedTopology: true, //¯\_(ツ)_/¯ Ахьмад сказал прописать
    }
  )
  .then(() => {
    console.log("Connect to mongoDB server"); //Выводит в консоль текст
  });

const app = express();//Подключает сервер express
app.use(express.json()); //Декодируем файлы в json
app.use(express.urlencoded({ extended: true })); //¯\_(ツ)_/¯

app.use(indexRouter); //Использует папку

app.listen(3000, () => { //Создаёт порт сервера
  console.log("Server is running..."); //Выводит в консоль текст
});
