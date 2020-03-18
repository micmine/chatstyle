const {
    compileSassAndSaveMultiple
} = require('compile-sass');
const fs = require('fs');
const path = require('path');

const out = 'chat.css';
const buildPath = 'build/';


compileSassAndSaveMultiple({
    sassPath: path.join(__dirname, 'src/'),
    cssPath: path.join(__dirname, buildPath),
    sassFileExt: 'scss',
    files: ['chat.scss']
});

fs.copyFile("build/chat.css", "chat.css", (err) => {
    if (err) throw err;
});
fs.copyFile("build/chat.css", "test/chat.css", (err) => {
    if (err) throw err;
});