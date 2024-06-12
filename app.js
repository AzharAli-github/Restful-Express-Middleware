const express = require('express')
const app = express();
const config = require('./config')
const userRouter = require('./users.json')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./api-docs/Swagger.yaml')

const loggerMiddleware = (req, res, next) => {
    console.log("Logged" + `${req.url} ${req.method}`)
    next();
}
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
app.use(loggerMiddleware)
app.use(express.json())
app.use('/api/v1/users', userRouter)

app.use((req, res, next) => {
    res.status(400).send('Resource not Found')
})

app.listen(config.PORT, () => {
    console.log('Listening on port 3000')
})

