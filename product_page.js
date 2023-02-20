
function func2(m){
   const img_div2 = document.getElementById('img_div1');
   img_div2.src = m;
}

function func3(m){
   const img_div2 = document.getElementById('img_div1');
   img_div2.src = m;
}



const product = document.querySelector('.product_child2 button');
console.log(product);
const div_count = document.querySelector('.child_head5 #span_el');
console.log(div_count);

let cout = 0;
product.addEventListener('click',()=>{
   cout ++;
   div_count.innerHTML=cout;
})