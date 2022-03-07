const fs = require('fs')
const path = require('path')
const hbs = require('hbs')
const express = require('express')
const multer = require('multer')

const app = express()
const port = 3000

let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/pdfs');
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
});

let upload = multer({ storage }).single('pdf');

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    const files = fs.readdirSync(path.join(__dirname, 'public/pdfs')).map(name => {
        return {
            name: path.basename(name, 'pdf'),
            url: `/pdfs/${name}`
        };
    })

    res.render('index', {
        files,
        title: 'Poozman Recipes',
        name: 'Esfandyar Pooezsh',
        listLength: files.length
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: "Esfandyar Poozesh"
    })
})

app.get('/upload', (req, res) => {
    let message = 'Select file to upload'
    res.render('upload', {
        title: 'Upload New Recipe',
        name: 'Esfandyar Poozesh',
    })
})

app.post('/up/pdf', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            res.render('upload', {
                title: 'Upload New Recipe',
                name: 'Esfandyar Poozesh',
                messageFail: 'Upload failed. Please try again.'
            })
        }
            res.render('upload', {
                title: 'Upload New Recipe',
                name: 'Esfandyar Poozesh',
                messageSuccess: 'Upload Successful.'
        })
    });
});

app.listen(port, () => {
    console.log(`The server started correct on port ${port}...`)
})