import React , {Component} from "react";
import "./landing.css";
import "./js/script"








const Landing = () => {


  return (
    <div>
<script src="./js/script.js"></script>

      <section class="home" id="home">
        <div class="row">
          <div class="content">
            <h3>Always feel special with us</h3>
            <a href="/about" class="btn">
              Explore us
            </a>
          </div>

          <div class="image">
            <img src="image/home-img-2.png" class="main-home-image" alt="image" />
          </div>
        </div>

        <div class="image-slider">
          <img src="image/home-img-2.png" alt="" />
          <img src="image/home-img-3.png" alt="" />
          <img src="image/pasta.png" alt="" />
        </div>
        </section>




        <section class="about" id="about">

<h1 class="heading"> about us <span>why choose us</span> </h1>    

<div class="row">

    <div class="image">
        <img src="image/about-img.png" alt=""/>
    </div>

    <div class="contents">
        <h3 class="title">what's make our cafe special!</h3>
        <p>Tea Hungama presents authentic delicious food with love that everyone can feel special. There are so many dishes in our café that you can enjoy in a soulful atmosphere with classy ambience</p>
        <a href="/Mailer" class="btn"> Contact us</a>
        <div class="icons-containerss pl-5">
            <div class="iconss">
                <img src="image/about-icon-1.png" alt=""/>
                <h3>quality food</h3>
            </div>
            <div class="iconss">
                <img src="image/about-icon-2.png" alt=""/>
                <h3>our branches</h3>
            </div>
            <div class="iconss">
                <img src="image/about-icon-3.png" alt=""/>
                <h3>free delivery</h3>
            </div>
        </div>
    </div>

</div>

</section>








 <section class="menus" id="menu">

<h1 class="heading"> our menu <span>Menu Categories</span> </h1>

<div class="box-container">

    <a href="#" class="box">
        <img src="image/menu-1.png" alt=""/>
        <div class="contents">
            <h3>our special Chai</h3>
           
            <span>view more</span>
        </div>
    </a>

    <a href="#" class="box">
        <img src="image/menu-2.png" alt=""/>
        <div class="contents">
            <h3>our special coffee</h3>
           
            <span>view more</span>
        </div>
    </a>

    <a href="#" class="box">
        <img src="./image/pizza.png" alt=""/>
        <div class="contents">
            <h3>our special pizza</h3>
           
            <span>view more</span>
        </div>
    </a>

    <a href="#" class="box">
        <img src="./image/burger_122704.png" alt=""/>
        <div class="contents">
            <h3>our special burgers</h3>
           
            <span>view more</span>
        </div>
    </a>

    <a href="#" class="box">
        <img src="./image/sandwich.png" alt=""/>
        <div class="contents">
            <h3>our special sandwich</h3>
           
            <span>view more</span>
        </div>
    </a>

    <a href="#" class="box">
        <img src="./image/pasta.png" alt=""/>
        <div class="contents">
            <h3>our special shake</h3>

            <span>view more</span>
        </div>
    </a>

</div>

</section>





<section class="review" id="review">

    <h1 class="heading"> reviews <span>what people says</span> </h1>

    <div class="swiper review-slider">

        <div class="swiper-wrapper">

            <div class="swiper-slide box">
                <i class="fas fa-quote-left"></i>
                <i class="fas fa-quote-right"></i>
                <img src="https://cdn.pixabay.com/photo/2017/06/13/12/51/thumb-2398752__340.png" alt=""/>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>On a wet evening, we were seeking some tea and coffee and discovered this restaurant. A close second-best location for a hangout with friends where you can get some coffee and food. Good vibes and ambiance. Prices are affordable; they won't break the bank.</p>
                <h3>Rohan das</h3>
                <span>satisfied client</span>
            </div>

            <div class="swiper-slide box">
                <i class="fas fa-quote-left"></i>
                <i class="fas fa-quote-right"></i>
                <img src="https://cdn.pixabay.com/photo/2017/06/13/12/51/thumb-2398752__340.png" alt=""/>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>- The chicken momo I had was very good. The momos were delicious and soft, truly melting in the mouth. There were 8 in a pack for only Rs 69, and the chicken filling was more than sufficient. I gotta say, it was among the greatest momo I've ever tasted. The package included momo soup and the customary momo chutney. They both found it to be quite delicious. The momo soup was loaded with vegetables, a good amount of chicken chunks, and eggs. HAVE TO TRY!</p>
                <h3>Indrojit dey</h3>
                <span>satisfied client</span>
            </div>

  

        </div>

        <div class="swiper-pagination"></div>

    </div>

</section>



<section id="testimonial">
        <div class="container-fluid ">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h2>Client Review</h2>
                    </div>
                </div>
                <div class="col-12">
                    <div id="testimonialCarousel" class="carousel slide" data-ride="carousel">
             
                        <ol class="carousel-indicators">
                            <li data-target="#testimonialCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#testimonialCarousel" data-slide-to="1"></li>
                            <li data-target="#testimonialCarousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                
                            <div class="carousel-item active">
                                <div class="carousel-content">
                                    <div class="client-img"><img src="image/pic-1.png" alt="Testimonial Slider"/></div>
                                    <p><i>This location has an incredible sense of authenticity. The variety and quality are outstanding, and the prices are so reasonable that you can easily eat enough of them! You should try the peri peri fries; they are delicious. If you enjoy tea, this place is ideal for you. The masala chai, chocolate chai, and many other varieties of chai start at only Rs. 15, and you will adore them. The employees here are really welcoming. I go here almost every other day and I strongly suggest. </i></p>
                                    <h3><span>-</span> Gourav Kumar <span>-</span></h3>
                                </div>
                            </div>
                          
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <div class="client-img">       <img src="image/pic-2.png" alt="Testimonial Slider"/></div>
                                    <p><i> They serve delicious meals at fair prices, and the interior is really attractive. I would highly recommend.</i></p>
                                    <h3><span>-</span> Mukesh Kumar <span>-</span></h3>
                                </div>
                            </div>
                    
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <div class="client-img">       <img src="image/pic-3.png" alt="Testimonial Slider"/></div>
                                    <p><i>- The chicken momo I had was very good. The momos were delicious and soft, truly melting in the mouth. There were 8 in a pack for only Rs 69, and the chicken filling was more than sufficient. I gotta say, it was among the greatest momo I've ever tasted. The package included momo soup and the customary momo chutney. They both found it to be quite delicious. The momo soup was loaded with vegetables, a good amount of chicken chunks, and eggs. HAVE TO TRY!</i></p>
                                    <h3><span>-</span> Rajnish Kumar <span>-</span></h3>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <div class="client-img"><img src="image/pic-4.png" alt="Testimonial Slider"/></div>
                                    <p><i>Tea Hungama presents authentic delicious food with love that everyone can feel special. There are so many dishes in our café that you can enjoy in a soulful atmosphere with classy ambience.</i></p>
                                    <h3><span>-</span> Rajnish Kumar <span>-</span></h3>
                                </div>
                            </div>
                      
                            <a class="carousel-control-prev text-white" href="#testimonialCarousel" role="button" data-slide="prev">
                                <i class="fas fa-chevron-left"></i>
                            </a>
                            <a class="carousel-control-next text-white" href="#testimonialCarousel" role="button" data-slide="next">
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="hero mt-5">
     
     <div class="intro">
       <div>
       
         <h2>WELCOME</h2>
         <h2>Good foo good life</h2>
       </div>
       <div>
       
       </div>
     </div>
     <div class="hero-bg">
       <img src=" imagess/pasta.png" alt="cup of coffee" />
     </div>
     
   </section>




<section class="footer mt-5">

    <div class="box-container">

    <div class="logo-container">
                <img class="logos" src="/image/TEA LOGO FINAL.png" alt="Logo"/>
            </div>
    

        <div class="box">
            <h3>contact info</h3>
            <a href="#"> <i class="fas fa-phone"></i> +8250400962 </a>
            <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
            <a href="#"> <i class="fas fa-envelope"></i> teahungama@gmail.com </a>
            <a href="#"> <i class="fas fa-envelope"></i> Newtown Rd, near unitech, Newtown,kolkata, west beangal 700156 </a>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
         
            <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
    
        </div>

    </div>

    <div class="credit"> creatd by <span>wilmee designer</span> | all rights reserved </div>

</section>





    </div>
    
  );
};




export default Landing;
