import homeimage from './media/home.jpg';

export default function home () {
    let content = document.querySelector('.content');
    content.innerHTML = `<div class="home">
    <div class="texts-container">
        <div class="title">
            Welcome to Our Restaurant
        </div>
        <div class="subtext">
            We're an orchestra of culinary artistry. 
            Led by Michelin-starred maestros and seasoned veterans,
             our kitchen hums with a symphony of skills and passion.
        </div>
    </div>
     
     <img src="${homeimage}" alt="">
    
     
</div>`;
   
}