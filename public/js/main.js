//Declaring all game variables
let coins = 100;
let coinCount = document.getElementById('coinCount');
let startGames = document.getElementById('start-game');
let gridCont = document.getElementById('gridCont');
document.getElementById("notication").style.display = "none";
let gameOver = document.getElementById('gameOver');
document.getElementById("template-help").style.display = "none";
countaddPuppy = 1;
countaddHouse = 1;

let addPuppy = () => {
  countaddPuppy -= 1;
  if (countaddPuppy == 0 || countaddPuppy < 0) {
    document.getElementById("notication").style.display = "block";
    document.getElementById("title-notication").innerHTML = `
    <span>Mỗi lượt chơi chỉ cho phép mua một </span>
    <br>
    <b>Cún con</b>
    `
  }
  else {
    if (coins < 100) {
      document.getElementById("notication").style.display = "block";
      document.getElementById("title-notication").innerHTML = `
    <span>Bạn không đủ điểm để mua thêm</span>
    <br>
    <b>Cún con</b>
    `
    }
    else if (coins >= 100) {
      dog2.style.display = "block"
      coins -= 100;
      happiness += 60;
      if (happiness > 100) { happiness = 100; }
      coinTab.textContent = coins
    }
  }
}
let configTypeButton = (type) => {
  if (type === "none") {
    document.querySelector('button').disabled = true;
  } else {
    document.querySelector('button').disabled = false;
  }

}

let addHouse = () => {
  countaddHouse -= 1;
  if (countaddHouse == 0 || countaddHouse < 0) {
    document.getElementById("notication").style.display = "block";
    document.getElementById("title-notication").innerHTML = `
    <span>Mỗi lượt chơi chỉ cho phép mua một </span>
    <br>
    <b>Nhà cho thú cưng</b>
    `
  } else {
    if (coins < 150) {
      document.getElementById("notication").style.display = "block";
      document.getElementById("title-notication").innerHTML = `
      <span>Bạn không đủ điểm để mua </span>
      <br>
      <b>Nhà cho thú cưng</b>
      `
    }
    else if (coins >= 150) {
      document.getElementById("dogHouse").style.display = "block";
      coins -= 150;
      happiness += 90;
      if (happiness > 100) { happiness = 100; }
      coinTab.textContent = coins
    }
  }
};

let closeNotication = () => {
  document.getElementById("notication").style.display = "none";
  configTypeButton("block")
}

let help = () => {
  document.getElementById("template-help").style.display = "block"
}

let start = () => {
  
  startGames.style.display = "none";
  coinCount.style.display = "flex"
  gridCont.style.display = "block";
  time();
  poopGen();
  initAudioPlayer();
  setInterval(time, 10000);
  setInterval(poopGen, 7000);
}

let continueGame = () => {
  coins -= coins;
  setTimeout(() => {
    count = 0;
    hunger = 100;
    thirst = 100;
    happiness = 100;
    coins = 100;
  }, 100);
  startGames.style.display = "none";
  coinCount.style.display = "flex"
  gridCont.style.display = "block";
  time();
  poopGen();
  initAudioPlayer();
  setInterval(time, 10000);
  setInterval(poopGen, 7000);
  gameOver.style.display = "none"
}
let blackGame = () => {
  gameOver.style.display = "none";
  startGames.style.display = "block";
  coinCount.style.display = "none";
  gridCont.style.display = "none";
  count = 0;
  hunger = 100;
  thirst = 100;
  happiness = 100;
  coins = 100;
  audio.pause();
  audioStart.src = "./public/music/start-game.mp3";
  audioStart.loop = true;
  audioStart.oncanplaythrough = (event) => {
    var playedPromise = audioStart.play();
    if (playedPromise) {
      playedPromise.catch((e) => {
        if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
          audioStart.pause();
          audioStart.load()
        }
      }).then(() => {
        console.log("playing sound !!!");
      });
    }
  }
}

let closeTempalteHelp = () => {
  document.getElementById("template-help").style.display = "none";
  // document.getElementById("template-help").style.animation
}
//  demo pull request
