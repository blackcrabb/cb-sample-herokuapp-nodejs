const app=require('express')()
const PORT = process.env.PORT || 5555

app.get('/',(req,res)=>{
    res.send("HOLA HEROKU")
})

app.listen(PORT)