const express = require('express');
const path = require('path');

const mainRouter = require('./routes/mainRouter');


const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use(mainRouter);



app.listen(4000, () => {
    console.log('Servidor rodando na porta http://localhost:4000 👨‍🚀');
});