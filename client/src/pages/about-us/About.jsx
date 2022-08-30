import React from 'react'
import "./about.css"

function About() {
  return (
    <div>
      
  
  
    <section class="showcase-area" id="showcase">
      <div class="showcase-container">
        <h1 class="main-title" id="home">Eat Right Food</h1>
        <p>Eat Healty, it is good for our health.</p>
        <a href="#food-menu" class="btn btn-primary">Menu</a>
      </div>
    </section>

    <section id="about">
      <div class="about-wrapper container">
        <div class="about-text">
          <p class="small">About Us</p>
          <h2>We've beem making healthy food last for 10 years</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
            eos omnis, nobis dignissimos perferendis et officia architecto,
            fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
            maiores praesentium soluta alias asperiores saepe commodi
            consequatur? Perferendis est placeat facere aspernatur!
          </p>
        </div>
        <div class="about-img">
          <img src="https://i.postimg.cc/mgpwzmx9/about-photo.jpg" alt="food" />
        </div>
      </div>
    </section>
    <section id="food">
      <h2>Types of food</h2>
      <div class="food-container container">
        <div class="food-type fruite">
          <div class="img-container">
            <img src="https://i.postimg.cc/yxThVPXk/food1.jpg" alt="error" />
            <div class="img-content">
              <h3>fruite</h3>
              <a
                href="https://en.wikipedia.org/wiki/Fruit"
                class="btn btn-primary"
                target="blank"
                >learn more</a
              >
            </div>
          </div>
        </div>
        <div class="food-type vegetable">
          <div class="img-container">
            <img src="https://i.postimg.cc/Nffm6Rkk/food2.jpg" alt="error" />
            <div class="img-content">
              <h3>vegetable</h3>
              <a
                href="https://en.wikipedia.org/wiki/Vegetable"
                class="btn btn-primary"
                target="blank"
                >learn more</a
              >
            </div>
          </div>
        </div>
        <div class="food-type grin">
          <div class="img-container">
            <img src="https://i.postimg.cc/76ZwsPsd/food3.jpg" alt="error" />
            <div class="img-content">
              <h3>grin</h3>
              <a
                href="https://en.wikipedia.org/wiki/Grain"
                class="btn btn-primary"
                target="blank"
                >learn more</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero">
     
      <div class="intro">
        <div>
          <h1>Our Coffee Is</h1>
          <h2>A Never Ending Story</h2>
        </div>
        <div>
          <button>See Nearest Location</button>
        </div>
      </div>
      <div class="hero-bg">
        <img src=" imagess/cup_of_coffee.png" alt="cup of coffee" />
      </div>
      
    </section>


    <section id="food-menu">
      <h2 class="food-menu-heading">Food Menu</h2>
      <div class="food-menu-container container">
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i.postimg.cc/wTLMsvSQ/food-menu1.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">Price: &#8377; 250</p>
          </div>
        </div>

        <div class="food-menu-item">
          <div class="food-img">
            <img
              src="https://i.postimg.cc/sgzXPzzd/food-menu2.jpg"
              alt="error"
            />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">Price: &#8377; 250</p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i.postimg.cc/8zbCtYkF/food-menu3.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">Price: &#8377; 250</p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i.postimg.cc/Yq98p5Z7/food-menu4.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">Price: &#8377; 250</p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i.postimg.cc/KYnDqxkP/food-menu5.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 5</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">Price: &#8377; 250</p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i.postimg.cc/Jnxc8xQt/food-menu6.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 6</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">Price: &#8377; 250</p>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials">
      <h2 class="testimonial-title">What Our Customers Say</h2>
      <div class="testimonial-container container">
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg" alt="" />
              <p class="customer-name">Ross Lee</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img
                src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg"
                alt=""
              />
              <p class="customer-name">Amelia Watson</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg" alt="" />
              <p class="customer-name">Ben Roy</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
      </div>
    </section>
    
<section >
<h2 class="testimonial-title">Our Hotel Ambience</h2>
<div id="gallery" class="container-fluid ">
  <img src="https://source.unsplash.com/1600x1200?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/1024x768?female,portrait" class="img-responsive"/>
   <img src="https://source.unsplash.com/1366x768?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/1920x1080?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/640x360?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/320x640?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/1200x1600?female,portrait" class="card img-responsive"/>
  <img src="https://source.unsplash.com/800x600?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/600x800?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/400x600?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/600x400?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/1100x1600?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/1600x1100?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/992x768?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/768x992?female,portrait" class="img-responsive"/>
</div>

</section>


<section class="hero">
     
     <div class="intro">
       <div>
         <h1>Our Coffee Is</h1>
         <h2>A Never Ending Story</h2>
       </div>
       <div>
       
       </div>
     </div>
     <div class="hero-bg">
       <img src=" imagess/pasta.png" alt="cup of coffee" />
     </div>
     
   </section>




    <footer>
      <div class="logo">
        <span class="dot"></span>
        Tea <br />
        Hungama
        <span class="dot"></span>
      </div>
      <div class="desc">
        <h3>One Sip - Forget The Rest</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          architecto veniam, quia similique voluptatum porro, assumenda beatae
          dolore exercitationem fugit aspernatur, blanditiis maxime officia amet
          ullam ab vel ut tempore.
        </p>
      </div>
      
    </footer>
   

    </div>
  )
}

export default About
