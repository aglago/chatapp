import express from 'express'
import { login, logout, signup } from '../controllers/auth.controllers.js'


const route = express.Router()

route.post('/login', login)
route.post('/signup', signup)
route.post('/logout', logout)

export default route