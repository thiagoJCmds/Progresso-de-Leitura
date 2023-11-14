const form = document.getElementById('form1')



form.addEventListener('submit', function(e){
    e.preventDefault();

 const num1 = document.getElementById('in1')
 const num2 = num1.value; 
//  console.log(num2)
 const num3 = document.getElementById('in2')
 const num4 = num3.value;
//  console.log(num4)
 if (num2 < num4){
     
     const mensagen = document.getElementById('p0')
     mensagen.classList.remove('p2')
     
    }
    else
    {const mensagen2 = document.getElementById('p4')
    mensagen2.classList.remove('p1')}
    
})