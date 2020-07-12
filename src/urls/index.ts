import Router from '../routes/index'
import express from 'express'
import {getMiddleWare} from '../middlewares/index'

class Urls {
   private router: any

   constructor() {
     this.router = express.Router({mergeParams: true})
   }
   
   public expose() {
     this.router.get('/', getMiddleWare, Router.get)
     this.router.post('/', Router.post)
     return this.router
   }

}

export default new Urls().expose()