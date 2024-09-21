import express from "express"
import { USER_BBDD } from "../bbdd.js";

const accountRouter = express.Router()


//obtener los detalles de una cuenta a partir del guid
accountRouter.get('/:guid', (req,res) => {
    const {guid} = req.params
    const user = USER_BBDD.find(user => user.guid === guid)
    
    if (!user) res.status(404).send()//
    
        res.send(user.name)
    })
    //crear una nueva cuenta
accountRouter.post("/",(req,res) => {
      console.log("*****")
      USER_BBDD.forEach(Element => {
        console.log(Element.index)
      })
    
      const {index,guid,name} = req.body
    
      if (!guid || !name) return res.state(400).send()//puede que state no ecista
      const user = USER_BBDD.find((user) => user.guid === guid)
      if (user) return res.status(409).send()
      
      //console.log(USER_BBDD)
      
        
      USER_BBDD.push({
        index,
        guid,
        name,
      })
    
      console.log("*****")
      USER_BBDD.forEach(Element => {
        console.log(Element.name)
      })
    
        return res.send()
    })
    
    //actualizar una nueva cuenta
accountRouter.patch("/:guid", (req,res) => {
      const {guid} = req.params
      const name = req.params.body
    
      if (!name) return res.state(400).send()
    
      const user = USER_BBDD.find(user => user.guid === guid)
      
      if (!user) res.status(404).send()
      user.name=name
       return  res.send()
      })
    //elimanr una nueva cuenta
    
accountRouter.delete("/:guid", (req,res) => {
      const {guid} = req.params
      const userIndex = USER_BBDD.findIndex(user => user.guid === guid)
      
      if (userIndex === -1) res.status(404).send()
        USER_BBDD.splice(userIndex,1)
          res.send()
    
      USER_BBDD.forEach(Element => {
        console.log(Element.index)
      })
        })
    
export default accountRouter