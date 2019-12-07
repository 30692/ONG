<?php include_once('head.php') ?>
<?php 
  // $cortes=blogDAO.select();
  // class Corte{
  //   public $titulo, $imagem;
  //   function __construct($titulo, $imagem){
  //        $this->titulo = $titulo;
  //        $this->imagem = $imagem;
  //   }

  // $cortes = array(
  //   new Corte(
  //     'oi',
  //     ''
  //   )
  //   );
  
?>


<!-- <div class="container">
<div class="row">

<?php foreach($cortes as $corte) { ?>

<div class="card col-sm-12 col-md-6" style="width: 18rem;">
  <img class="card-img-top" src="imagens/<?=$corte->imagem?>" height="450px" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"><?=$corte->titulo?></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<?php } ?>

</div>
</div> -->

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

/* Add a gray background color with some padding */
body {
  font-family: Arial;
  background: #f1f1f1;
}

/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: DarkRed;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.center {   
  float: center;
  width: 100%;
  left: 50%;
  top: 50%;
 
}

.leftcolumn {   
  float: left;
  width: 25%;
  height: 30%;
}
/* Right column */

.rightcolumn {
  float: left;
  width: 25%;
  height: 300px;
  padding-left: 40px;
  padding-right: 40px;
}
/* Fake image */
.fakeimg {
  background-color: Salmon;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
   background-color: Salmon;
   padding: 20px;
   margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: Salmon;
  margin-top: 20px;
}

.parag{
    font-size: 80px;
  text-align: center;
  font-family: Impact;
}
.parg{
  font-size: 40px;
  text-align: center;
  font-family: Helvetica;
}

.all{
  width: 100%;
  height: 100%;
  background: Salmon;

}

.garotinha{
    width: 70%;
    height: 600px;
    padding-left: px
}

.botoes{
    width: 100%;
    height: 600px;
    background-color: darkred;
    padding-top: 150px;
}

.centralizar{
    position:absolute; 
    top:210%;
    left:14%;
    transform: translate(-50%, -50%);
    background-color: salmon; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}


.centraliza{
    position:absolute; 
    top:210%;
    left:39%;
    transform: translate(-50%, -50%);
    background-color: salmon; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}



.centraliz{
    position:absolute; 
    top:210%;
    left:62%;
    transform: translate(-50%, -50%);
    background-color: salmon; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}



.centrali{
    position:absolute; 
    top:210%;
    left:87%;
    transform: translate(-50%, -50%);
    background-color: salmon; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}





/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {   
    width: 100%;
    padding: 0;
  }
}
</style>
 <!--Import Google Icon Font-->
 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 <!--Import materialize.css-->
 <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

</head>
<body>
    <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">YourHelp</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
              <li><a href="home2.html" onclick="mudaPagina('')">Home</a></li>
              <li><a href="PainelOng.html" onclick="mudaPagina('')">ONGs</a></li>
              <li><a href="PainelPatro.html" onclick="mudaPagina('')">Patrocinadores</a></li>
              <li><a href="portfolio.html" onclick="mudaPagina('')">Portfolio</a></li>
              <li><a href="blog.html" onclick="mudaPagina('')">Blog</a></li>
              <li><a href="logout.html" onclick="mudaPagina('')">LogOut</a></li>
          </ul>
        </div>
        
      </nav>
<div class="all">
<div class="center">
<div class="header">
  <h2 class="parag">YourHelp Blog</h2>
</div>

<div class="row">
 
    
      <h1>Hospital de câncer infantil</h1>
     
      <img src="./assets/blog1.png" class="garotinha" > 
      
      
      <p class="parg">A boa notícia é que o Hospital do GRAACC é especializado no tratamento do retinoblastoma e um dos poucos centros médicos do País a realizar uma técnica inovadora para o tratamento da doença: a quimioterapia intra-arterial. A técnica consiste em injetar o quimioterápico diretamente no vaso sanguíneo que irriga os olhos. Assim, o medicamento chega com mais precisão no tumor e não precisa ser administrado em altas doses no paciente, diminuindo efeitos colaterais e, em muitos casos, preservando o olho e a visão.

            Todo o tratamento é personalizado e individualizado, buscando a cura e preservando a qualidade de vida.</p>
    </div>
  <div class="botoes">
    
      <img src="./assets/blog2.jpg" class="rightcolumn">
      <button class="centralizar">Saiba mais</button>
      <img src="./assets/blog3.jpg" class="rightcolumn"> 
      <button class="centraliza">Saiba mais</button>
      <img src="./assets/blog4.jpg" class="rightcolumn"> 
      <button class="centraliz">Saiba mais</button>
      <img src="./assets/blog5.jfif" class="rightcolumn">
      <button class="centrali">Saiba mais</button>
 
    </div>

    
            
      
      <p class="parg"> Oferecemos dois tipos de atendimentos, atendimento na ala popular (sem hora marcada, sendo atendido conforme a chegada) e na ala particular atendidos com hora marcada. O retorno pode ser feito em até 30 dias, sem custos adicionais. (EXCETO AOS SÁBADOS). Dessa forma, poderemos avaliar a adaptação do seu animal ao tratamento indicado, bem como a evolução do quadro clínico.</p>
    </div>
</div>
</div>
    

</div>
</div>

</body>
</html>
<?php include_once('footer.php'); ?>