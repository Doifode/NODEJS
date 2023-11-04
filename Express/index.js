// const express = require('express');
// const app = express();
// app.get('/',(req,res)=>{
//     res.send("hii its working")

// })
// app.get('/about',(req,res)=>{
//     res.send("hii its about")

// })
// app.listen(2304,()=>{
//     console.log('hiiii')
// })


// simple code 


//how to show the static html pages  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// const path = require('path');
// const express = require('express');
// const app = express();
// const pathdir = path.join(__dirname, 'Public');
// app.use(express.static(pathdir));

// app.get('/', (req, res) => {
//     res.end(`<h1>Hi this is first page</h1>`);
//     // this code is used to create static page rendering.
// }).listen(3000, () => {
//     console.log('hiiiii')
// });
// app.get('/about', (req, res) => {
//     res.sendfile(`${pathdir}/About.html`)
// });
// app.get("/download",(req,res)=>{
//     res.download(`${pathdir}/About.html`)
// })



// implementation of template engine =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const path = require('path');
// const express = require('express');

// const app = express();

// app.set("view engine", "ejs");

// console.log(app.get('view engine'))

// app.get("/about", (req, res) => {
//     res.render('About',
//         {
//             title: "About"

//         });
// })

// app.get("/", (req, res) => {
//     {
//         res.render('index', {
//             title: "Index"
//         });
//     }
// }).listen(3000, () => {
//     console.log("Hii !!")
// });



// Creating separate router using routers =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const express = require('express');
// const app = express();
// const router = express.Router();
// app.set('view engine', 'ejs')
// app.use(router);

// router.get('/', (req, res) => {
//     res.render("index", {
//         title: "Index"
//     })
// })
// router.get('/about', (req, res) => {
//     res.render("About", {
//         title: "about"
//     })
// })
// app.listen(
//     3000, () => {
//         console.log('hiiii')
//     }
// )


const router = require('./Routes/router');
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
app.use(router);

app.listen(
    30011, () => {
        console.log('hiiii')
    }
)
// here i have created separate file for routers from there i am handling all routes;


