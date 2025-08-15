import express, { response } from "express"
import cors from "cors"
import { conn } from "./config/sequelize.js"

//Tabelas
import autorModel from "./models/autorModel.js"
import { error } from "console"

//Rotas
import autorRoutes from "./routes/autorRoutes.js"

const app = express()

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT","PATH", "DELETE"],
    credentials: true
}))

app.use(express.json())

conn
    .sync()
    .then(() => {
        console.log("Banco de dados conectado")
    })
    .catch((error) => console.log(error))

app.use("/api/autores", autorRoutes)

app.get("/", (request, response) => {
    response.status(200).json({
        mensagem: "Olá, mundo"
    })
})

export default app;