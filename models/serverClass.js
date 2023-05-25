import express from 'express'
import cors from 'cors'
import { PORT } from '../helper/conectionEnv.js'
import { sequelize } from '../helper/sequelizeBD.js'
import routerUser from '../routes/user.routes.js'
class ModelServer {
  constructor() {
    this.port = PORT
    this.app = express()
    this.usuarioPath = '/usuario'
    this.middlewares()
    this.routes()
    // this.testConnectionBD()
  }

  async testConnectionBD() {
    try {
      await sequelize.authenticate()
      console.log('Conexion exitosa a la base de datos')
    } catch (error) {
      console.log('Conexion fallida con sequelize')
    }
  }

  async closeConnectionBD() {
    sequelize.close()
  }

  middlewares() {
    this.app.use(express.static('public'))
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes() {
    this.app.use(this.usuarioPath, routerUser)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

export default ModelServer
