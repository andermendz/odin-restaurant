import styles from './style.css';
import home from './home';


let content = document.querySelector('.content')
let homeact = document.querySelector('#home')
let menuact = document.querySelector('#menu')
let aboutact = document.querySelector('#about')

let resphomeact = document.querySelector('#resphome')
let respmenuact = document.querySelector('#respmenu')
let respaboutact = document.querySelector('#respabout')


let menutoggle = document.querySelector('#menu-toggle')

menutoggle.onclick = () =>{
    let statusChecker = 0
    let menuoptions = [resphomeact,respmenuact,respaboutact]
    
    menuoptions.forEach((option) => {
        if(option.classList.contains('menuoptionsvisible')){
            statusChecker = 1
        } 
    })

    if(statusChecker == 1){
        menuoptions.forEach((option) => {
            option.classList.remove('menuoptionsvisible')
            option.classList.add('menuoptionshidden')
           
         

        })
    } else  if ( statusChecker == 0){
        menuoptions.forEach((option) => {
            option.classList.remove('menuoptionshidden')
            option.classList.add('menuoptionsvisible')
        })
    }
}
  


  
  
        

       
     

  




home()
homeact.onclick = home;