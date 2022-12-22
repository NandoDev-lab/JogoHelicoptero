function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='helicoptero' class='anima2'></div>");
	$("#fundoGame").append("<div id='helicoptero' class='anima4'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");



//Principais variáveis do jogo
	






//Função que movimenta o fundo do jogo

function movefundo() {

esquerda = parseInt($("#fundoGame").css("background-position"));
$("#fundoGame").css("background-position",esquerda-1);

} // fim da função movefundo()
function moveInimigos(){
    frente = parseInt($("#helicoptero").css("background-position"));
    $("#helicoptero").css("background-position",frente);
}
    //Verifica se o usuário pressionou alguma tecla	
var jogo = {}
	
    //Game Loop
    var TECLA = {
        W: 87,
        S: 83,
        D: 68,
        A: 65,
        end: 35
        }
    
        jogo.pressionou = [];
        
$(document).keydown(function(e){
    jogo.pressionou[e.which] = true;
});
    
    
$(document).keyup(function(e){
    jogo.pressionou[e.which] = false;
});

// função de controle do Jogador
function movejogador() {	
    if (jogo.pressionou[TECLA.W]) {
    var topo = parseInt($("#jogador").css("top"));
    $("#jogador").css("top",topo-10);            
}
     // movimentação para cima ou para baixo       
    if(jogo.pressionou[TECLA.S]){                
    var topo = parseInt($("#jogador").css("top"));
    $("#jogador").css("top",topo+10);	
}
if(jogo.pressionou[TECLA.A]){                
    var voltar = parseInt($("#jogador").css("left"));
    $("#jogador").css("left",voltar-10);	
}
    //função de disparo
    if (jogo.pressionou[TECLA.D]){
        var avancar = parseInt($("#jogador").css("left"));
        $("#jogador").css("left", avancar+10);                
              
}
        
} // fim da função movejogador()
jogo.timer = setInterval(loop,30);

function loop() {
movejogador();
movefundo();
moveInimigos();

} // Fim da função loop()

} // Fim da função start