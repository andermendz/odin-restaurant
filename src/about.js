import aboutRestImage from './media/aboutrest.jpg';

export default function about (){
    let content = document.querySelector('.content')
    content.innerHTML = `   <div class="about">
    <div class="texts-container">
        <div class="title">
            About Us
        </div>
        <div class="subtext">
          At <strong>Pragmata</strong> , we believe that food is more than just
           sustenance; it's an art form that can transport us to new
            places and experiences. That's why our menu is crafted by
             world-class professionals who are passionate about
              creating dishes that are both delicious and visually
               stunning.  <p></p>


From the freshest local bounty to globally sourced treasures, 
our ingredients are carefully selected to create dishes that are
both flavorful and authentic. Our chefs are experts in their craft,
and they use their skills and creativity to elevate each ingredient
 to its fullest potential.
        </div>
    </div>
     
     <img src="${aboutRestImage}" alt="aboutrestimage">
    
     
</div>
  
  `
}