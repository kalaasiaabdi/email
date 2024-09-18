require('dotenv').config()
const {Resend}  = require ('resend')
const resend = new Resend (process.env.RESEND_API)


app.get ('/' , async (req,res) => {
    try{

        const data = await resend.emails.send ({
            from: 'Asia <onboarding@resend.dev>',
            to: ['asiaabdikala22@gmail.com'],
            subject: 'useless',
            html: '<strong>It works!</strong>',
        })
        console.log(data)
        res.status(200).json(data)
    }catch (error) {
        console.error 
        res.status(404).json(error)
    }
})


app.listen(3200 ,() =>{
    console.log('server running on port 3200')
})