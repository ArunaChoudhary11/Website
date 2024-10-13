console.log("Script running")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click" , ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.toggle('.sidebarGo'))
    {
          document.querySelector('.menu').style.display ='none'
          setTimeout(()=> {
              document.querySelector('.cross').style.display = 'inline'
          } , 350)
        
     

    }
    else{
        document.querySelector('.menu').style.display = 'inline'
        document.querySelector('.cross').style.display='none'
    }
}) 