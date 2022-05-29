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
  status: number,
  details: string
) => void

const statusMessages: Record<number, string> = {
  200: 'Done',
  201: 'Created',
  400: 'Invalid Format',
  500: 'Internal Error'
}

const success: Success = (req, res, message, status) => {
  const statusCode = !status ? 200 : status
  res.status(statusCode).send({
    error: '',
    body: message
  })
}

const error: Error = (req, res, message, status, details) => {
  console.log(`> [ ERROR RESPONSE ] = ${details}`)
  const statusCode = !status ? 500 : status
  const statusMessage = !message ? statusMessages[statusCode] : message
  res.status(statusCode).send({
    error: statusMessage,
    body: ''
  })
}

export const response = {
  success,
  error
}
