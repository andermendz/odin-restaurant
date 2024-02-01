import menuFresh from './media/menufresh.jpg'
import menuGlobal from './media/menuglobal.jpg'
import menuSenses from './media/menusenses.jpg'

export default function menu (){
    let content = document.querySelector('.content')
    content.innerHTML = `
    <div class="menu">
    <div class="texts-container">
      <div class="title">Menu</div>
      <div class="subtext">
        At <strong>Pragmata</strong> our menu is a passport to a world of
        delectable discoveries. Crafted by the hands of culinary maestros,
        each dish is a symphony of flavors, textures, and artistry.
        <p></p>

        From the freshest local bounty to globally sourced treasures, our
        ingredients are carefully selected to create dishes that are both
        flavorful and authentic. Our chefs are experts in their craft, and
        they use their skills and creativity to elevate each ingredient to
        its fullest potential.
      </div>
    </div>

    <div class="catmenus">
      <div class="menutype">
        <div class="menutitle">Fresh, Seasonal Inspirations</div>
        <img src="${menuFresh}" alt="">
        <div>Pure and unadorned, celebrating the 
          inherent beauty of seasonal bounty.
           Each bite, a vibrant brushstroke on a clean plate.</div>
      </div>
      <div class="menutype">
        <div class="menutitle">Global Accents, Crafted with Passion</div>
        <img src="${menuGlobal}" alt="">
        <div>Bold flavors woven with whispers of distant lands.
           Textures sing in harmony, transporting your senses on
            a global odyssey.</div>
      </div>
      <div class="menutype">
        <div class="menutitle">A Symphony for the Senses</div>
        <img src="${menuSenses}" alt="">
        <div>
          Every element in perfect harmony,
           creating a feast for the eyes before
            tantalizing the palate. An experience beyond taste, a true sensory celebration.
        </div>
      </div>
      
    </div>
  </div>
    `;
}