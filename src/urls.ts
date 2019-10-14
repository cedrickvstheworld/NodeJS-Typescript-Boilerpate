import indexRoute from './routes/index'
import express from 'express'
import * as indexMiddleware from './middlewares/index'

class Url {
   // type declarations
   private router: any

   constructor() {
     this.router = express.Router({mergeParams: true})
   }
   
   public index() {
     this.router.get('/', indexMiddleware.getMiddleWare ,indexRoute.get)
     this.router.post('/', indexRoute.post)
     return this.router
   }

}

export default new Url()
