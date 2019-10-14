import {Request, Response, NextFunction} from 'express'

export const getMiddleWare = (request: Request, response: Response, next: NextFunction) => {
  next()
}