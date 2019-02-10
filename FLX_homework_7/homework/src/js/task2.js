const globals = {
    tries: 3,
    bid: 10,
    prize: 0,
    defaultRange: 5
  };
  
  let random = Object.assign({}, globals);
  let playGame = true;
  if (confirm("Do you want to play a game?")) {
    while (playGame) {
      const luckyNum = Math.floor(Math.random() * random.defaultRange);
      playGame = false;
      for (
        let attempts = random.tries, currentBid = random.bid;
        attempts > 0;
        attempts--, currentBid = Math.floor(currentBid / 2)
      ) {
        const guess = parseInt(
          prompt(`Enter a number from 0 to ${random.defaultRange}
Attempts left: ${attempts}
Total prize: ${random.prize}$
Possible prize on current attempt: ${currentBid}$`)
        );
        if (guess === luckyNum) {
          random.prize += currentBid;
          random.defaultRange += random.defaultRange;
          random.bid *= 3;
          if (
            confirm(`
              Congratulation! Your prize is: ${random.prize}$.
              Do you want to continue?`)
          ) {
            playGame = true;
            break;
          } else {
            alert(`Thank you for a game. Your prize is: ${random.prize}$`);
            if (confirm("Do you want to play again?")) {
              random.prize = globals.prize;
              random.defaultRange = globals.defaultRange;
              random.bid = globals.bid;
            playGame = true;
              break;
            }
            break;
          }
        } else if (isNaN(guess)) {
          alert("You did not become a millionaire, but can.");
          break;
        } else if (attempts <= 1) {
          alert(`Thank you for a game. Your prize is: ${random.prize}$`);
          random.prize = globals.prize;
          random.defaultRange = globals.defaultRange;
          random.bid = globals.bid;
        playGame =
            confirm("Do you want to play again?") ||
            alert("You did not become a millionaire, but can.");
        }
      }
    }
  } else {
    alert("You did not become a millionaire, but can.");
  }