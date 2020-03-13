const { compileSassAndSaveMultiple } = require('compile-sass');
const combine = require('css-combine');
const fs = require('fs');
const path = require('path');

const out = 'chat.css';
const buildPath = 'build/';

if (!fs.existsSync(buildPath)){
    fs.mkdirSync(buildPath);
}

compileSassAndSaveMultiple({
    sassPath: path.join(__dirname, 'src/'),
    cssPath: path.join(__dirname, buildPath),
    sassFileExt: 'scss',
    files: ['chat.scss', 'variables.scss']
});

combine(buildPath + 'chat.css').pipe(
    fs.createWriteStream(out)
);

combine(buildPath + 'variables.css').pipe(
    fs.createWriteStream(out)
);
