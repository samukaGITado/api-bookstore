import app from "./app.js";

const PORT = 3333

app.listen(PORT, () => {
    console.log(`Servidor HTTP running na PORTA: ${PORT}`)
})