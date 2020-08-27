async function sayHi(){
    return "hello async";
}

async function call(){
    var test = await sayHi();
    console.log(test);
}

call();
