let dropdown=document.getElementById('teams-link');
dropdown.addEventListener('mouseenter',()=>{
     let box=document.getElementById('box');
     
     box.style.display="block";
    })
    let nav=document.querySelector('.navBar')
nav.addEventListener('mouseleave',()=>{
    let box=document.getElementById('box');
    box.style.display="none";
})