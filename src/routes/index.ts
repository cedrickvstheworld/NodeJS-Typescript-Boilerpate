import {Request, Response} from 'express'

class Router {

  public get = (request: Request, response: Response) => {
    response.sendStatus(200)
  }

  public post = (request: Request, response: Response) => {
    response.sendStatus(201)
  }

}

export default new Router()
