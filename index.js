import express from "express";
import bodyParser from "body-parser"
import dotenv from "dotenv"
import accountRouter from "./routes/account.js"
import authRouter from "./routes/auth.js"
import authTokenRouter from "./routes/authToken.js"
import authSessionRouter from "./routes/authSession.js"
import cookieParser from "cookie-parser";

dotenv.config(/*se pone el path, si no esta .env*/ )
const expressApp = express()

const PORT = process.env.SERVER_PORT//4321;

expressApp.use(cookieParser())

expressApp.use(express.json())
expressApp.use(express.text())
expressApp.use("/account",accountRouter)
expressApp.use("/auth",authRouter)
expressApp.use("/authToken",authTokenRouter)
expressApp.use("/authSession",authSessionRouter)



expressApp.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
})

