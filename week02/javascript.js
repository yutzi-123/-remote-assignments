/*Assignment 1*/
function max(numbers){

  let counter = numbers.length - 1
    for(let i=0 ; i<counter ; i++){
      if( numbers[0] < numbers[1] ){  
          numbers.splice(0,1)
      }else{
          numbers.splice(1,1) 
      }
    }
  console.log(numbers)
  
}

max([1, 2, 4, 5]);
max([5, 2, 7, 1, 6]);



/*Assignment 2*/
function calculate(args){ let result;
if(args.op==="+"){ result=args.n1+args.n2;
}else if(args.op==="-"){ result=args.n1-args.n2;
}else{
result="Not supported";
}
return result; }

// method_1_建構子
function Template(op,n1,n2){
  this.op = op;
  this.n1 = n1;
  this.n2 = n2;
}

let method_1 = new Template("+",10,20);
console.log(calculate(method_1))

// method_2_建構子
let method_2 = new Object();

method_2.op = "+"
method_2.n1 = 57
method_2.n2 = 64

console.log(calculate(method_2))

// method_3_JSON
let method_3 = {"op":"+","n1":15,"n2":20}
console.log(calculate(method_3))



/*Assignment 3*/
function avg(data){
  
let amount = data.size
let price = 0

for(i=0;i<amount;i++){
  price += data.products[i].price
  }
  
let avg = price/amount
console.log(avg)
} 


avg({
size:3, products:[
{
name:"Product 1",
price:100 },
{
name:"Product 2",
price:700 },
{
name:"Product 3",
price:250 }
]
});



/*Assignment 4*/
//Request 1
const welcomeMsg = document.querySelector('.header')
welcomeMsg.addEventListener('click',function (){
  welcomeMsg.innerHTML = `Have a Good Time!`
  
})

//Request 2
const menu = document.querySelector('.menu')
const hiddenMenu = document.querySelector('.hiddenMenu')
const cancle = document.querySelector('.X')

menu.addEventListener('click',function(){
  hiddenMenu.style.display = 'inline-block';
})

cancle.addEventListener('click',function(){
  hiddenMenu.style.display = 'none';
})


//Request 3
const btn = document.querySelector('.btn')
const hiddenBox = document.querySelector('.hiddenBox')

btn.addEventListener('click',function(){
  hiddenBox.style.display = 'block';
})



