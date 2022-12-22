
function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='helicoptero' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");


//Função que movimenta o fundo do jogo

function movefundo() {
    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position",esquerda-1);

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
    var topo;
    var volta;
    var avanca;	
    //movimentação para cima
    if (jogo.pressionou[TECLA.W]) {
    var topo = parseInt($("#jogador").css("top"));
    $("#jogador").css("top",topo-10);  
    if(topo<=1){
        $("#jogador").css("top",topo+10); 
    }          
}
     // movimentação para baixo       
    if(jogo.pressionou[TECLA.S]){                
    var topo = parseInt($("#jogador").css("top"));
    $("#jogador").css("top",topo+10);
    if(topo>=434){
        $("#jogador").css("top",topo-10);
    }	
    
}   
    // função voltar na tela
    if(jogo.pressionou[TECLA.A]){                
    var volta = parseInt($("#jogador").css("left"));
    $("#jogador").css("left",volta-10);	
    if (volta < 0){
        $("#jogador").css("left",volta+10);
    }
}
    //função de avançar na tela
    if (jogo.pressionou[TECLA.D]){
        var avanca = parseInt($("#jogador").css("left"));
        $("#jogador").css("left", avanca+10);                
        if(avanca>690){
            $("#jogador").css("left", avanca-10);
        }      
    }
        
} // fim da função movejogador()

// função movimentação inimigo

function moveinimigo1() {

    var velocidade=5;   
    var posicaoY = parseInt(Math.random() * 334);
	posicaoinicial = parseInt($("#helicoptero").css("left"));
    var posicaoatual = posicaoinicial-velocidade;   
	$("#helicoptero").css("left", posicaoatual );		
		if (posicaoatual <= 0) {  
            var proximo = posicaoY;                 
		    $("#helicoptero").css("left", 680 );
            $("#helicoptero").css("top",proximo); 
               
		   
	} 
         
} //Fim da função moveinimigo1()


jogo.timer = setInterval(loop,30);

function loop() {
movejogador();
movefundo();
moveinimigo1();

} // Fim da função loop()




} // Fim da função start