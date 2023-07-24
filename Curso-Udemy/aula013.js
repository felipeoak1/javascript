// Funções de Callback

/* Uma função de Callback é uma função que é passada como argumento para outra função e é executada após a conclusão de alguma tarefa ou evento assíncrono. */

function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if (callback) callback()
    }), Math.random() * 1000
}

function f2(callback){
    setTimeout(() => {
        console.log('f2')
        if (callback) callback()
    }, Math.random() * 1000);
}

function f3(callback){
    setTimeout(()=>{
        console.log('f3')
        if (callback) callback()
    }
    , Math.random() * 1000)
}

// As funções serão executadas em ordem e só após o tempo de cada uma.
f1(chamaF2)

function chamaF2(){
    f2(chamaF3)
}

function chamaF3(){
    f3(chamaHello)
}

function chamaHello(){
    console.log('Hello World')
}