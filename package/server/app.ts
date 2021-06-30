import express from 'express'
import expressWs from 'express-ws'
import cookieParse from 'cookie-parser'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import clientWs from './router/clientWs/index'
import webWs from './router/webWs/index'

class App {
  public app: expressWs.Application
  constructor () {
    this.app = expressWs(express()).app
    this.config()
  }

  private config () {
    this.app.use(cors())
    this.app.use(json())
    this.app.use(urlencoded({ extended: false }))
    this.app.use(cookieParse())
    this.app.use('/im-ws', clientWs)
    this.app.use('/im-ws', webWs)
  }
}

export default new App().app