const express = require('express')
const app = express()


app.use(express.static(__dirname+'/public'))
app.use(express.json())

// app.get('/', function (req, res) {
//     res.sendFile(__dirname+'./public/home-page.html')
//   })

//   app.get('/contact', function (req, res) {
//     res.send(
//         `<ul>
//   <li><a href="/">Home</a></li>
//   <li><a href="/contact">Contact</a></li>
//   <li><a href="/service">Service</a></li>
// </ul>
//   <h1> kalmou taw yjik taw</h1>`)
//   })

//   app.get('/service', function (req, res) {
//     res.send(`<ul>
//     <li><a href="/">Home</a></li>
//     <li><a href="/contact">Contact</a></li>
//     <li><a href="/service">Service</a></li>
//   </ul>
//     <h1>Hatha service professionel</h1>`)
//   })
 

app.use('/views' , require('./routes/views'))

//the last part 

app.listen(5000,(err)=>{
    if(err) throw err
    else console.log('the serveur is working')
})