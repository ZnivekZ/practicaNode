import { Router } from "express"
import { USER_BBDD } from "../bbdd.js";
import express from "express"
import { checkEmainAndPass } from "../helpers/auxFunction.js";


const authRouter= Router()

//endpoint para loguearse
authRouter.get("/publico",(req,res)=>{    res.send("publico") })//el get no debiera tener body

//endpoint autenticado
authRouter.post("/autenticado",(req,res)=>{  
    
    const {email,pass} = req.body

    if (!email || !pass) return res.status(400).send("400")

    try {
         const user = checkEmainAndPass(email,pass)
         res.send(`autenticado ${user.name}`)

    } catch (error) {
        return res.status(401).send("401")
    }

})


//endpoint autorizado para admin campiar edad por rol xej
authRouter.post("/autorizado",(req,res)=>{  
    const {email,pass} = req.body

    if (!email || !pass) return res.status(400).send("400")
    try {
        const user = checkEmainAndPass(email,pass)

        if(user.age < 30 ) return res.send("403")

        res.send(`ADMIN ${user.name}`) 
    }catch (error) {
            return res.status(401).send("401")
        }
})
export default authRouter

