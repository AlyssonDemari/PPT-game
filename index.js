const escPlayer = document.querySelector('select')
        const buttonStart = document.querySelector("input")
        let imgComp = document.querySelector('.player-comp')
        let imgPlayer = document.querySelector('.player')
        const vencedor = document.querySelector('.vencedor')
        const placarPlayer = document.querySelector('#player')
        const placarComp = document.querySelector('#maquina')
        placarPlayer.innerHTML = 0
        placarComp.innerHTML = 0

        const convertComp = (repetidor) =>{
            compPlayer = Math.floor(Math.random() * 3)
            if(compPlayer == 0){
                imgComp.src = 'images/winRock.png'
                compPlayer = "Pedra"
            }else if(compPlayer == 1){
                imgComp.src = 'images/winsScissor.png'
                compPlayer = "Tesoura"
            }else{
                imgComp.src = 'images/winPaper.png'
                compPlayer = "Papel"
                
            }
            compararEscolha(compPlayer, escPlayer)
        }
        buttonStart.addEventListener('click', convertComp)


        const compararEscolha = () => {
        let contagemPlayer = parseInt(placarPlayer.innerHTML);
        let contagemComp = parseInt(placarComp.innerHTML);

        switch(escPlayer.value){
            case "Pedra":
                imgPlayer.src = 'images/winRock.png'
                switch(compPlayer){
                    case "Tesoura":
                        imgComp.src = 'images/loseScissor.png';
                        placarPlayer.innerHTML = contagemPlayer + 1;
                        return vencedor.innerHTML = 'Player venceu';
                    break

                    case "Papel":
                        imgPlayer.src = 'images/loseRock.png';
                        placarComp.innerHTML = contagemComp + 1
                        return vencedor.innerHTML = 'Máquina venceu!';
                    break

                    case "Pedra":
                        imgComp.src = 'images/loseRock.png';
                        imgPlayer.src = 'images/loseRock.png';
                        return vencedor.innerHTML = 'O jogo empatou!';
                }
            break

            case "Tesoura":
                imgPlayer.src = 'images/winsScissor.png'
                switch(compPlayer){
                    case "Tesoura":
                        imgComp.src = 'images/loseScissor.png'
                        imgPlayer.src = 'images/loseScissor.png'
                        return vencedor.innerHTML = 'O jogo empatou!'
                    break

                    case "Papel":
                        imgComp.src = 'images/losePaper.png'
                        placarPlayer.innerHTML = contagemPlayer + 1
                        return vencedor.innerHTML = 'Player venceu!'
                    break

                    case "Pedra":
                        imgPlayer.src = 'images/loseScissor.png'
                        placarComp.innerHTML = contagemComp + 1
                        return vencedor.innerHTML = "Máquina venceu!"
                }
            break

            case "Papel":
                imgPlayer.src = 'images/winPaper.png'
                switch(compPlayer){
                    case "Tesoura":
                        imgPlayer.src = 'images/losePaper.png'
                        placarComp.innerHTML = contagemComp + 1
                        return vencedor.innerHTML = "Máquina venceu!"
                    break

                    case "Papel":
                        imgComp.src = 'images/losePaper.png'
                        imgPlayer.src = 'images/losePaper.png'    
                        return vencedor.innerHTML = 'O jogo empatou!'
                    break

                    case "Pedra":
                        imgComp.src = 'images/loseRock.png'
                        placarPlayer.innerHTML = contagemPlayer + 1
                        return vencedor.innerHTML = 'Player venceu!'
                }
        }
    }    
 