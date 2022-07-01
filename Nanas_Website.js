function scrollToContact(){
    window.scroll({
        top: 2500, 
        behavior: 'smooth'
      });
}

function scrollToHome(){
    window.scroll({
        top: 0, 
        behavior: 'smooth'
      });
}

function hamburgerClick(){
    let dropdown = document.getElementById('hamLinks');
    if(dropdown.style.display === "block" ){
        dropdown.style.display = 'none';
    }else
    dropdown.style.display = 'block';
}