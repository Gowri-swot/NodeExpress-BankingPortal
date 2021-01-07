const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express();
const data = require('./data')

app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req,res) {
    res.render('index', { 
        title: 'Account Summary',
        accounts: data.accounts });
})

app.get('/savings', function(req,res) {
    res.render('account', { 
        account: data.accounts.savings });
})

app.get('/checking', function(req,res) {
    res.render('account', { 
        account: data.accounts.checking });
})

app.get('/credit', function(req,res) {
    res.render('account', { 
        account: data.accounts.credit });
})

app.get('/profile', function(req,res) {
    res.render('profile', { 
        user: data.users[0] });
})

app.get('/transfer', function(req,res) {
    res.render('transfer');
})

app.post('/transfer', function(req,res,body) {
    data.accounts[req.body.from].balance -= req.body.amount;
    data.accounts[req.body.to].balance += parseInt(req.body.amount, 10);
    data.writeJSON();
    res.render('transfer', {message: 'Transfer Completed'});
})

app.get('/payment', (req, res) => res.render('payment', {account: accounts.credit}));

app.post('/payment', (req, res) => {
    data.accounts.credit.balance -= req.body.amount;
    data.accounts.credit.available += parseInt(req.body.amount);

   res.render('payment', {message: 'Payment Successful', account: accounts.credit});
});

app.listen(3000,  () => { console.log('PS Project Running on port 3000!') });