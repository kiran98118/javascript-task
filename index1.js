const btn=document.querySelector('#b')
const a=document.querySelector('ul')
const z=document.querySelector('#newtask input')

btn.onclick= function(){
   if(z.value.length == 0){
       alert("please enter a task")
   }
   else{
       var x=document.createElement('li')
       x.innerText=z.value 
       a.appendChild(x)
       z.value=""
       
       
   }
}
