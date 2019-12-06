<?php  include_once("header.php");?>
<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<link rel="stylesheet" style = "text/css" href="teste.css">

<div id="content-slider">
  <div class="wrap-slider">	

   

    <!-- ===== Thumbnail ControlNav ======= -->			
    <input type="radio" id="a-1" name="a" >			
    <input type="radio" id="a-2" name="a" >			
    <input type="radio" id="a-3" name="a" >
    <input type="radio" id="a-4" name="a" >

    <nav id="main">
      <label for="a-1" class="first"></label>
      <label for="a-2" class="first"></label>
      <label for="a-3" class="first"></label>
      <label for="a-4" class="first"></label>
    </nav>

    <!-- =================================== -->	
    <nav id="control">
      <label for="a-1"></label>
      <label for="a-2"></label>
      <label for="a-3"></label>
      <label for="a-4"></label>
    </nav>
    <!-- =================================== -->

    <!-- 	IMAGE NAVIGATION pic -->
    <span id="b-1" class="th" tabindex="10">
      <img src="slider\slider1.png" alt="" id="p-1">
      <div class="title-1">
        <h1>PAK FA T-50</h1>
        <p>Stealth multirole fighter</p>
        <a href="">read more...</a>
      </div>
    </span>

    <span id="b-2" class="th" tabindex="11">
      <img src="slider\slider2.png" alt="" id="p-2">
      <div class="title-2">
        <h1>Kamov Ka-50 "Black Shark"</h1>
        <p>Attack helicopter</p>
        <a href="">read more...</a>
      </div>
    </span>			

    <span id="b-3" class="th" tabindex="12">
      <img src="slider\slider3.png" alt="" id="p-3">
      <div class="title-3">
        <h1>Sukhoi Su-27</h1> 
        <p>Air superiority fighter</p> 
        <a href="http://www.apaeindaiatuba.org.br/">read more...</a>
      </div>
    </span>

    <span id="b-4" class="th" tabindex="13">
      <img src="slider\slider4.png" alt="" id="p-4">
      <div class="title-4">
        <h1>mil mi-28</h1>
        <p>Attack helicopter</p>
        <a href="">read more...</a>
      </div>
    </span>
    <span id="b-4" class="th" tabindex="13">
      <img src="slider\slider5.png" alt="" id="p-4">
      <div class="title-4">
        <h1></h1>
        <p>Attack helicopter</p>
        <a href="">read more...</a>
      </div>
    </span>

    <!-- ===== IMages ======= -->							

    <div class="slider">
      <div class="inset">

        <figure>
          <figcaption class="title-1">
            <h1></h1>
            <p>Stealth multirole fighter</p>
            <a href="">read more...</a>
          </figcaption>
          <img src="slider\slider5.png"alt="" id="i-1" class="f">						
        </figure>

        <figure>
          <figcaption class="title-2">
            <h1></h1>
            <p></p>
            <a href="">read more...</a>
          </figcaption>
          <img src="slider\slider4.png" alt="" id="i-2" class="f">						
        </figure>

        <figure>
          <figcaption class="title-3">
            <h1>Seja um voluntário</h1> 
            <p></p> 
            <a href="http://www.apaeindaiatuba.org.br/">read more...</a>
          </figcaption>
          <img src="slider\slider3.png" alt="" id="i-3" class="f">						
        </figure>

        <figure>
          <figcaption class="title-4">
            <h1>mil mi-28</h1>
            <p>Attack helicopter</p>
            <a href="">FIND OUT MORE</a>
          </figcaption>
          <img src="slider\slider2.png"alt="" id="i-4" class="f">						
        </figure>


        <figure>
          <figcaption class="title-5">
            <h1>PAK FA T-50</h1>
            <p>Stealth multirole fighter</p>
            <a href="">read more...</a>
          </figcaption>
          <img src="slider\slider1.png" alt="" id="i-5" class="f">						
        </figure>				
      </div>
    </div>					

  </div>		
</div>
<?php  include_once("footer.php");?>