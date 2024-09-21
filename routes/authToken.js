import { Router } from "express";   
import { checkEmainAndPass } from "../helpers/auxFunction.js";

const authTokenRouter = Router()

authTokenRouter.post("/login",(req,res)=>{  
    //const {email,pass} = req.body

    if (!email || !pass) return res.status(400).send("400")

    try {
        const user = checkEmainAndPass(email,pass)
        res.send(`autenticado ${user.name}`)

    } catch (error) {
        return res.status(401).send("401")
    }


})

    export default authTokenRouter 
