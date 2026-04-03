const express = require("express")
const app = express();
app.use(express.json())

function add(a, b) {
    return (
        a + b 
    )
};



function subtract(a , b) {
    return (
        a - b 
    )
};

function Mutiply (a, b, c){
return (
    a * b* c
)
};




function handleButton (count) {
    
    return (
 count + 9
    )
} 

module.exports = {add, subtract, Mutiply, handleButton}