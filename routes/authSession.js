import { Router } from "express";   
import { checkEmainAndPass } from "../helpers/auxFunction.js";
import { nanoid } from "nanoid";
import { USER_BBDD } from "../bbdd.js";

const sessions =[];
const authSessionRouter = Router();

authSessionRouter.post("/login",(req,res)=>{  
    const {email,pass} = req.body

    if (!email || !pass) return res.status(400).send("400")

    try {
        const {guid} = checkEmainAndPass(email,pass)
        const sessionID = nanoid()
        sessions.push({sessionID,guid})

        res.cookie("sessionID",sessionID,{httpOnly:true,})
        return res.send()

    } catch (error) {
        return res.status(401).send("401")
    }
   

})
//solicitud autenticada con sesion para obtener el perfil del usuario
    authSessionRouter.get("/profile",(req,res)=>{  
        const {cookies} = req

        if (!cookies.sessionID) return res.status(401).send("401")
        const usersession = sessions.find(
                (session)=>session.sessionID === cookies.sessionID)

        if (!usersession) return res.status(401).send("401")
        
        const user = USER_BBDD.find((user)=>user.guid === usersession.guid)
        return res.send(user)
    })


    export default authSessionRouter
