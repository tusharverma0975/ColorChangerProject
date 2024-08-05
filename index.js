const buttons= document.querySelectorAll('.button');
const bodyy = document.querySelector('body')
console.log(buttons);
buttons.forEach(function(buttonIdDisplay){
  console.log('called',buttonIdDisplay);
  buttonIdDisplay.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey')
    {
      bodyy.style.backgroundColor =e.target.id;
    }
    if(e.target.id==='white')
    {
      bodyy.style.backgroundColor ='blue';
    }
    if(e.target.id==='blue')
    {
      bodyy.style.backgroundColor ='green';
    }
    if(e.target.id==='yellow')
    {
      bodyy.style.backgroundColor ='red';
    }

  })
})