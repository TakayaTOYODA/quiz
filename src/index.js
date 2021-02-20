let test = 'Hello World!';

const test2 = 'Hey Hello World!'

let array = ['hhh','jjj','kkk','lll'];

//console.log(array[0])

//let index = 0;
//while(index < array.length){
//    console.log(array[index]);
//    index++;
//}

const test3 = function(arg) {
    let index = 0;
    while(index < arg){
        console.log(index);
        index++;
    }
};

const test4 = {
    color: 'pink',
    size: 'large',
    purfume: 'nint',
    goto: function(){
        console.log('Hello World !');
    }
};

//window.alert('Hello World');
document.getElementsByTagName('button')[0].addEventListener('click',function(){window.alert('Hello World!')});