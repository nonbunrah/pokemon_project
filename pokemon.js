
pokemonArray = 
[{
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle",
    damage: 40
  }]

  cardsUsed = []

class Person {
	constructor(player) {
		this.player = player
		this.cards = []
		this.points = 0
		this.wins = 0
	}
}

let firstPlayer = new Person("Player 1") 
let secondPlayer = new Person("Player 2")

class Game {
	constructor(pokeCards) {
		this.pokeCards = pokeCards
	}
	draw(player) {
		for(let i = 0; i < 3; i++) {
				let drawRandom = pokemonArray.splice(Math.floor(Math.random()*pokemonArray.length), 1)[0];
				player.cards.push(drawRandom);

				console.log(player.player + " been dealt " + drawRandom.name + "!")
				cardsUsed.push(drawRandom.name)
		}
	}
//game plays all at once
//FIX: cards that are being played are being returned to deck and being played again.

	playCard(player) {
		let playersChoice = player.cards.splice(Math.floor(Math.random() * player.cards.length), 1)[0];
		console.log(player.player + " has played " + playersChoice.name + " with a damage of " + playersChoice.damage);
		//console.log(firstPlayer.playersChoice.name + " vs. " + secondPlayer.playersChoice.name)
		return playersChoice;

		//player.cards.splice(0, 3)
		//player.cards.splice(0, 3)
	}

	battle(player1, player2) {

		let x = this.playCard(firstPlayer)
		let y = this.playCard(secondPlayer)

		if(x.damage > y.damage) {
			player1.points += 1;
			console.log("Player 1 wins!")
		} else if (x.damage == y.damage) {
			//no one gets points hahaha
			console.log("It's a draw!")
		} else if (x.damage < y.damage) {
			player2.points += 1;
			console.log("Player 2 wins!")
		};

		//splicing so that we can remove the cards from the deck

		console.log("----------------------------")
		if (firstPlayer.points >= 1 ) {
		console.log(player1.player + " has " + player1.points + " point(s).") 
		} else {console.log(player1.player + " has no points")};
		console.log("----------------------------")
		if (secondPlayer.points >= 1 ) {
		console.log(player2.player + " has " + player2.points + " point(s).") 
		} else {console.log(player2.player + " has no points")};

		if (player1.points > player2.points) {
			console.log(player1.player + " wins this entire round! ")
		} else if (player1.points < player2.points) {
			console.log(player2.player + " wins this entire round! ")
		}

		console.log("----------------------------")
		console.log("Cards used: " + cardsUsed)
		console.log("----------------------------")
		console.log("Number of wins for first player: " + firstPlayer.wins)
		console.log("----------------------------")
		console.log("Number of wins for second player: " + secondPlayer.wins)
		console.log("                            ")
		console.log("---------GAME RESET ---------")
		console.log("                            ")
	}
}

//i think make this portion down here a loop
for (let i = 0; i < 3; i++) {
let game1 = new Game(pokemonArray)

game1.draw(firstPlayer)
game1.draw(secondPlayer)

game1.battle(firstPlayer,secondPlayer);
}
