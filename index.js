const express = require('express');

const app = express();
console.log('Teste de GitHub')

app.get('/',(req, res)=>{
    res.send('Funcionouuuuuuuuuuu!!!')
});

app.listen(3000,()=>{
    console.log('servidor rodando')
});