import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-structure',
  templateUrl: './game-structure.component.html',
  styleUrls: ['./game-structure.component.css']
})

export class GameStructureComponent implements OnInit {

  ngOnInit() {

  }

  contadorDeJogadas: number;
  jogando: boolean = true;
  playerDaRodada: string = "Player 1";
  resultadoDoJogo: string;
  playerUm: boolean = true;
  posicaoDivs: string[] = ["", "", "", "", "", "", "", "", ""];
  
  marcaJogada(valor: any) { 
    if (this.jogando == true) {
      if (this.playerUm) {
        this.playerUm = false;
        this.playerDaRodada = "Player 2";
        valor.target.innerText = "X";
        valor.target.style.backgroundColor = "lightblue";
      }
      else {
        this.playerUm = true;
        this.playerDaRodada = "Player 1";
        valor.target.innerText = "O";
        valor.target.style.backgroundColor = "lightgreen";
      }

      this.registraJogada(valor);
  
      this.verificaVitoria();
      
      this.contadorDeJogadas = 0;
      this.verificaEmpate();
    }
  }

  //Limpar o innerText e remover as cores das areas selecionadas na rodada anterior
  iniciarNovoJogo() {
    this.jogando = true;
    this.playerDaRodada = "Player 1";
    this.resultadoDoJogo = "";
    this.playerUm = true;

    for (let i = 0; i <= (this.posicaoDivs.length - 1); i++) {
      this.posicaoDivs[i] = "";
    }
    // console.log(this.posicaoDivs);
  }

  registraJogada(valor: any) {
    this.posicaoDivs[valor] = valor.target.className;
    switch (this.posicaoDivs[valor]) {
      case "areaClick um":
        this.posicaoDivs[0] = valor.target.innerText;
        break;
      case "areaClick dois":
        this.posicaoDivs[1] = valor.target.innerText;
        break;
      case "areaClick tres":
        this.posicaoDivs[2] = valor.target.innerText;
        break;
      case "areaClick quatro":
        this.posicaoDivs[3] = valor.target.innerText;
        break;
      case "areaClick cinco":
        this.posicaoDivs[4] = valor.target.innerText;
        break;
      case "areaClick seis":
        this.posicaoDivs[5] = valor.target.innerText;
        break;
      case "areaClick sete":
        this.posicaoDivs[6] = valor.target.innerText;
        break;
      case "areaClick oito":
        this.posicaoDivs[7] = valor.target.innerText;
        break;
      case "areaClick nove":
        this.posicaoDivs[8] = valor.target.innerText;
        break;
    }
  }

  verificaVitoria() {
    if (this.posicaoDivs[0] != "" && 
    this.posicaoDivs[0] == this.posicaoDivs[1] && 
    this.posicaoDivs[1] == this.posicaoDivs[2]) {
      this.verificaQuemVenceu(this.posicaoDivs[0]);
      this.jogando = false;
    }
    else if (this.posicaoDivs[3] != "" && 
    this.posicaoDivs[3] == this.posicaoDivs[4] && 
    this.posicaoDivs[4] == this.posicaoDivs[5]) {
      this.verificaQuemVenceu(this.posicaoDivs[3]);
      this.jogando = false;
    }
    else if (this.posicaoDivs[6] != "" && 
    this.posicaoDivs[6] == this.posicaoDivs[7] && 
    this.posicaoDivs[7] == this.posicaoDivs[8]) {
      this.verificaQuemVenceu(this.posicaoDivs[6]);
      this.jogando = false;
    }
    else if (this.posicaoDivs[0] != "" && 
    this.posicaoDivs[0] == this.posicaoDivs[3] && 
    this.posicaoDivs[3] == this.posicaoDivs[6]) {
      this.verificaQuemVenceu(this.posicaoDivs[0]);
      this.jogando = false;
    }
    else if (this.posicaoDivs[1] != "" && 
    this.posicaoDivs[1] == this.posicaoDivs[4] && 
    this.posicaoDivs[4] == this.posicaoDivs[7]) {
      this.verificaQuemVenceu(this.posicaoDivs[1]);
      this.jogando = false;
    }
    else if (this.posicaoDivs[2] != "" && 
    this.posicaoDivs[2] == this.posicaoDivs[5] && 
    this.posicaoDivs[5] == this.posicaoDivs[8]) {
      this.verificaQuemVenceu(this.posicaoDivs[2]);
      this.jogando = false;
    }
    else if (this.posicaoDivs[0] != "" && 
    this.posicaoDivs[0] == this.posicaoDivs[4] && 
    this.posicaoDivs[4] == this.posicaoDivs[8]) {
      this.verificaQuemVenceu(this.posicaoDivs[0]);
      this.jogando = false;
    }
    else if (this.posicaoDivs[2] != "" && 
    this.posicaoDivs[2] == this.posicaoDivs[4] && 
    this.posicaoDivs[4] == this.posicaoDivs[6]) {
      this.verificaQuemVenceu(this.posicaoDivs[2]);
      this.jogando = false;
    }
  }

  verificaQuemVenceu(valorDoVencedor: string) {
    if (valorDoVencedor == "X") {
      this.resultadoDoJogo = "Vitória do Player 1";
    }
    else {
      this.resultadoDoJogo = "Vitória do Player 2";
    }
  }
  
  verificaEmpate() {
    for (let i = 0; i <= (this.posicaoDivs.length - 1); i++) {
      if (this.posicaoDivs[i] !== "") {
        this.contadorDeJogadas++;
        if (this.contadorDeJogadas == this.posicaoDivs.length) {
          this.resultadoDoJogo = "Empate";
          this.jogando = false;
        }
      }
    }
  }

}
