let campoIdade;
let campoFantasia;
let campoTerror;

function setup() {
  createCanvas(800, 300);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("15");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoTerror = createCheckbox("Gosta de terror?");
}

function draw() {
  background("blue");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeTerror = campoTerror.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeTerror);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeTerror) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Paranorman";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeTerror) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Invocação do Mal";
        }
      } else {
        if (gostaDeFantasia) {
          return "Os Fantasmas Se Divertem";
        } else {
          return "Coraline";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Alice No Pais Das Maravilhas";
    } else {
      return "Harry Potter";
    }
  }
}
