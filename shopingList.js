const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let prudacts=[
    {
        barcode:"21345",
        name:'milk',
        price:"5",
        amount:'2',
        company:'tnova'
    },
    {
        barcode:"12345",
        name:'salt',
        price:"5",
        amount:'2',
        company:'salit'
    },
    {
        barcode:"12545",
        name:'milky',
        price:"5",
        amount:'2',
        company:'shtraos'
    },
    {
        barcode:"19345",
        name:'eggs',
        price:"10",
        amount:'2',
        company:'tnova'
    },
    {
        barcode:"12346",
        name:'bread',
        price:"7",
        amount:'2',
        company:'anjel'
    }
];

app.get('/prudacts', (req, res) => {
    res.send(prudacts);
});

app.get('/', (req, res) => {
    res.send('Hello');
});


app.listen(3001);