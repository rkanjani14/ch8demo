import express from 'express'
import web from './routes/web.js'
const app = express()

app.set('view engine','ejs')
app.use("/",web)


const port = '3000'
app.listen(port,()=>{
    console.log(`server http://localhost:${port}`)
})