const express = require('express')
const mailRoutes = require('./routes/mail')
const app = express()
app.use(express.json())

var cors = require('cors')
app.use(cors())

const PORT = process.env.PORT || 5000
app.use('/mail-route', mailRoutes)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})