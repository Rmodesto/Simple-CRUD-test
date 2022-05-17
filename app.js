const colors = require('colors');
const express = require ('express');
const dotenv = require('dotenv');

const connectDB = require('./config/db');


const  path = require ('path');
const expressHbs = require('express-handlebars');

//Import routes
const appRoutes = require('./routes/subscribe');
const adminRoutes = require('./routes/admin');
const productRoutes = require('./routes/myWork');
const postRoutes = require('./routes/post');



// app initialization

dotenv.config({ path: './config/config.env' });
const port = process.env.PORT || 8080;
//connect to database 
connectDB();
const app = express();


//define public files 
app.use(express.static(path.join(__dirname, 'public')));

//parse body data
app.use(express.urlencoded({ extended: false }));

//configure handlebars
app.engine('hbs', expressHbs.engine({
    extname: '.hbs',
    defaultLayout: 'main-layout',
    layoutsDir: 'views/layouts'
}))
//select handlebars as view engine
app.set('view engine', 'hbs');
//middleware to parse json data
app.use(express.json());

// routes & middleware

app.use(appRoutes);
app.use(adminRoutes);
app.use(productRoutes);

app.use('/', postRoutes)

app.get ('/', (req, res, next) => {
    res.render('index', {docTitle: "Homepage"});
})

app.get ('/about', (req, res, next) => {
    res.render('about', {docTitle: "About", aboutActive: true});
})


app.get ('/events',(req, res, next) => {
    res.render('events', {docTitle: "Events", eventsActive: true});
})



app.use((req, res, next) => {
    res.render('404', {docTitle: "Page Not Found"});
})




app.post((req, res, next) => {
    console.log(req.body);
})





//Express error handler
app.use((error, req, res, next) => {
    res.status(500).json({error: error.message})
})


app.listen(port, console.log(`Server is running on port ${port}`.yellow.underline))

