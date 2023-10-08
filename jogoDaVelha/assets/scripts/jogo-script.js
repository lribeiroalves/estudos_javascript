class TicTacToe {
    constructor(){
        this.console = document.querySelector('textarea')
        this.console.readOnly = true
        this.map_win_positions()
        this.num_players = sessionStorage.getItem('jogadores')
        this.map_table()
        this.game_started = false
    }

    map_table() {
        this.positions = {}
        let table_emelents = document.getElementsByTagName('td')
        for (let el of table_emelents) {
            this.positions[el.id] = el
        }
    }

    map_win_positions() {
        this.win_position = [['l1c1', 'l1c2', 'l1c3'],
                             ['l2c1', 'l2c2', 'l2c3'],
                             ['l3c1', 'l3c2', 'l3c3'],
                             ['l1c1', 'l2c1', 'l3c1'],
                             ['l1c2', 'l2c2', 'l3c2'],
                             ['l1c3', 'l2c3', 'l3c3'],
                             ['l1c1', 'l2c2', 'l3c3'],
                             ['l1c3', 'l2c2', 'l3c1']]
    }

    check_winner() {
        let player = this.current_player.toLowerCase()
        for (let index in this.win_position) {
            if (this.positions[this.win_position[index][0]].innerHTML == player && this.positions[this.win_position[index][1]].innerHTML == player && this.positions[this.win_position[index][2]].innerHTML == player) {
                this.winner = this.current_player
                this.game_started = false
            }
        }
        let game_tie = true
        for (let el in this.positions) {
            if (this.positions[el].innerHTML == '') {
                game_tie = false
                break
            }
        }
        if (game_tie && this.winner == '') {
            this.winner = 'tie'
            this.game_started = false
        }
    }

    reset_game() {
        for (let el in this.positions) {
            this.positions[el].innerHTML = ''
        }
    }

    click(element, pos=[]) {
        if (this.game_started) {
            if (element.innerHTML == ''){
                this.console.innerHTML += `\nO JOGADOR '${this.current_player.toString().toUpperCase()}' CLICOU NA POSIÇÃO [${pos}]...`
                element.innerHTML = this.current_player
                if (this.current_player == 'x') {
                    element.style.color = 'green'
                } else if (this.current_player == 'o') {
                    element.style.color = 'red'
                }
                this.check_winner()
                if (this.winner != '' && this.winner != 'tie') {
                    this.console.innerHTML += `\n\nO VENCEDOR É O JOGADOR '${this.current_player.toString().toUpperCase()}'... PARABÉNS!!!...`
                } else if (this.winner == 'tie') {
                    this.console.innerHTML += `\n\nO JOGO TERMINOU EMPATADO :'(...`
                } else {
                    if (this.current_player == 'x') {
                        this.current_player = 'o'
                    } else {
                        this.current_player = 'x'
                    }
                    this.console.innerHTML += `\nAGUARDANDO O JOGADOR '${this.current_player.toString().toUpperCase()}'...`
                }
            } else {
                this.console.innerHTML += '\nEssa posição já foi preenchida... Selecione outra posição..'
            }
        } else {
            this.console.innerHTML += '\nO JOGO AINDA NÃO FOI INICIADO!'
        }
        this.console.scrollTop = this.console.scrollHeight
    }

    new_game() {
        this.reset_game()
        if (this.num_players == '2') {
            this.console.innerHTML = 'NOVO JOGO...\nAGUARDANDO JOGADOR X...'
            this.current_player = 'x'
            this.winner = ''
            this.game_started = true
        } else if (this.num_players == '1') {
            alert('O jogo ainda não foi programado para jogar contra a máquina!')
        }
    }

    toggle_terminal() {
        if (this.console.style.opacity == '0') {
            this.console.style.opacity = '1'
        } else {
            this.console.style.opacity = '0'
        }
    }
}

let GAME = new TicTacToe()