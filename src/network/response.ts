import { Request, Response } from 'express'

type Success = <T>(
  req: Request,
  res: Response,
  message: T,
  status?: number
) => void

type Error = <T>(
  req: Request,
  res: Response,
  message: T,
  status?: number
) => void

const success: Success = (req, res, message, status) => {
  res.status(status || 200).send({
    error: '',
    body: message
  })
}

const error: Error = (req, res, message, status) => {
  res.status(status || 500).send({
    error: message,
    body: ''
  })
}

export const response = {
  success,
  error
}
