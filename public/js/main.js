//Declaring all game variables
let count = 2;
let hunger = 100;
let thirst = 100;
let happiness = 100;
let coins = 100;
let dog = document.getElementById('dog');
let dog2 = document.getElementById('dog2');
let hungerProgress = document.getElementById('progressBarHung');
let thirstProgress = document.getElementById('progressBarThir');
let happinessProgress = document.getElementById('progressBarHapp');
let coinTab = document.getElementById('coinsTab');
let poopSprite = document.getElementById('dogPoop');
let peeSprite = document.getElementById('dogPee');
let foodBowl = document.getElementById('dogFood');
let waterBowl = document.getElementById('dogWater');
let startGames = document.getElementById('start-game');
let coinCount = document.getElementById('coinCount');
let gridCont = document.getElementById('gridCont');
document.getElementById("notication").style.display = "none";
let gameOver = document.getElementById('gameOver');
document.getElementById("template-help").style.display = "none";
let foodFree = document.getElementById("foodFree");
countaddPuppy = 1;
countaddHouse = 1;
window.onload = function () {
  gameOver.style.display = "none"
  foodFree.innerHTML = `+ ${count} Free`;
  gridCont.style.display = "none";
  coinCount.style.display = "none";
  startGames.style.display = "block";
}
let randomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
}
let time = () => {
  let animNumber = Math.round(randomNumber(0, 3));
  if (animNumber == 0) {
    dog.className = 'dogSprite dogSpriteAnimMain';
    dog.src = "./public/images/dogsprite.gif";
    dog2.className = 'dogSprite2 dogSpriteAnimMain3';
    dog2.src = "./public/images/dogsprite.gif";
  }
  else if (animNumber == 1) {
    dog.className = 'dogSprite dogSpriteAnimMain2';
    dog.src = "./public/images/dogsprite.gif";
    dog2.className = 'dogSprite2 dogSpriteAnimMain';
    dog2.src = "./public/images/dogsprite.gif";
  }
  else if (animNumber == 2) {
    dog.className = 'dogSprite dogSpriteAnimMain3';
    dog.src = "./public/images/dogsprite.gif";
    dog2.className = 'dogSprite2 dogSpriteAnimSleep';
    dog2.src = "./public/images/dogsleep.gif";
  }
  else if (animNumber == 3) {
    dog.className = 'dogSprite dogSpriteAnimSleep';
    dog.src = "./public/images/dogsleep.gif"
    dog2.className = 'dogSprite2 dogSpriteAnimMain2';
    dog2.src = "./public/images/dogsprite.gif";
  }
  if (hunger <= 0 || thirst <= 0 || happiness <= 0) {
    configTypeButton("none");
    gameOver.style.display = "block"
  }
  if (hunger <= 0) {
    hunger = 0;
  }
  if (thirst <= 0) {
    thirst = 0
  }
  if (happiness <= 0) {
    happiness = 0
  }
  else {
  thirst -= 8;
  hunger -= 4;
  happiness -= 10;
  setHungerProgress(hunger);
  setThirstProgress(thirst);
  setHappinessProgress(happiness);
}
if (hunger == 100 && thirst == 100 && happiness == 100) {
  coins += 100;
  coinTab.textContent = coins
}
};

let poopGen = () => {
  let fecesType = Math.round(randomNumber(1, 2));
  // console.log(fecesType);
  // 1: ph??n
  // 2: n?????c
  if (fecesType == 1) {
    poopSprite.style.left = randomNumber(40, 60) + "vw";
    poopSprite.style.top = randomNumber(45, 59) + "vh";
    poopSprite.style.display = "block";
  }
  else if (fecesType == 2) {
    peeSprite.style.left = randomNumber(40, 60) + "vw";
    peeSprite.style.top = randomNumber(45, 59) + "vh";
    peeSprite.style.display = "block";
  }
}

let poopPickup = (type) => {
  coins += 20;
  coinTab.textContent = coins
  if (type == 1) {
    poopSprite.style.display = "none";
  }
  else if (type == 2) {
    peeSprite.style.display = "none"
  }
}
let setHungerProgress = (data) => {
  hungerProgress.setAttribute('aria-valuenow', data);
  hungerProgress.setAttribute('style', 'width:' + Number(data).toFixed(0) + '%');
  hungerProgress.innerHTML = `<b>${Number(data).toFixed(0) + '%'}</b>`
}
let setThirstProgress = (data) => {
  thirstProgress.setAttribute('aria-valuenow', data);
  thirstProgress.setAttribute('style', 'width:' + Number(data).toFixed(0) + '%');
  thirstProgress.innerHTML = `<b>${(Number(data).toFixed(0) + '%')}</b>`
}
let setHappinessProgress = (data) => {
  happinessProgress.setAttribute('aria-valuenow', data);
  happinessProgress.setAttribute('style', 'width:' + Number(data).toFixed(0) + '%');
  happinessProgress.innerHTML = `<b>${(Number(data).toFixed(0) + '%')}</b>`
}

let replenish = (type) => {
  if (type == 1) {
    count = count - 1
    if (count < 0 || count == 0) {
      foodFree.innerHTML = 20
      console.log("h???t l?????t mi???n ph??");
      if (hunger == 100) {
        configTypeButton("none");
        document.getElementById("notication").style.display = "block";
        document.getElementById("title-notication").innerHTML = `
        <span>Th???c ??n c???a c??n ???? </span>
        <br>
        <b>?????y ?????</b>
        `

      }
      else if (coins < 20) {
        configTypeButton("none");
        document.getElementById("notication").style.display = "block";
        document.getElementById("title-notication").innerHTML = `
        <span>B???n kh??ng ????? ??i???m ????? mua th??m</span>
        <br>
        <b>Th???c ??n</b>
        `
      }
      else if (coins >= 20) {
        foodBowl.src = "./public/images/dopFood.jpg";
        dog.className = 'dogSprite dogSpriteAnimFeed'
        hunger += 20;
        coins -= 20;
        if (coins < 0) { coins = 0; };
        if (hunger > 100) { hunger = 100; };
        setHungerProgress(hunger);
        coinTab.textContent = coins
        setTimeout(function () {
          replenishReversal(1);
        }, 10000)
      }
    } else {
      foodFree.innerHTML = `+ ${count} Free`
      if (hunger == 100) {
        configTypeButton("none");
        document.getElementById("notication").style.display = "block";
        document.getElementById("title-notication").innerHTML = `
        <span>Th???c ??n c???a c??n ???? </span>
        <br>
        <b>?????y ?????</b>
        `

      }
      else {
        foodBowl.src = "./public/images/dopFood.jpg";
        dog.className = 'dogSprite dogSpriteAnimFeed'
        hunger += 20;
        if (coins < 0) { coins = 0; };
        if (hunger > 100) { hunger = 100; };
        setHungerProgress(hunger);
        coinTab.textContent = coins
        setTimeout(function () {
          replenishReversal(1);
        }, 10000)
      }
    }

  }
  else if (type == 2) {
    if (thirst == 100) {
      configTypeButton("none");
      document.getElementById("notication").style.display = "block";
      document.getElementById("title-notication").innerHTML = `
      <span>N?????c u???ng c???a c??n ???? </span>
      <br>
      <b>?????y ?????</b>
      `
    }
    else if (coins < 10) {
      configTypeButton("none");
      document.getElementById("notication").style.display = "block";
      document.getElementById("title-notication").innerHTML = `
      <span>B???n kh??ng ????? ??i???m ????? mua th??m</span>
      <br>
      <b>N?????c u???ng</b>
      `
    }
    else if (coins >= 10) {
      waterBowl.src = "./public/images/dogwater.jpg";
      dog.className = 'dogSprite dogSpriteAnimFeed'
      coins -= 10;
      thirst += 10;
      if (coins < 0) { coins = 0; };
      if (thirst > 100) { thirst = 100; }
      setThirstProgress(thirst);
      coinTab.textContent = coins
      setTimeout(function () {
        replenishReversal(2);
      }, 10000)
    }
  }
  else if (type == 3) {
    if (happiness == 100) {
      configTypeButton("none");
      document.getElementById("notication").style.display = "block";
      document.getElementById("title-notication").innerHTML = `
      <span>C???m x??c c??n c???a b???n ???? ?????t</span>
      <br>
      <b>100%</b>
      `
    }
    else if (coins < 30) {
      configTypeButton("none");
      document.getElementById("notication").style.display = "block";
      document.getElementById("title-notication").innerHTML = `
      <span>B???n kh??ng ????? ??i???m ????? mua th??m</span>
      <br>
      <b>????? ch??i</b>
      `
    } else if (coins >= 30) {
      coins -= 30;
      happiness += 30;
      if (coins < 0) { coins = 0; };
      if (happiness > 100) { happiness = 100; }
      setHappinessProgress(happiness);
      coinTab.textContent = coins
    }
  }
};
let replenishReversal = (type) => {
  if (type == 1) {
    foodBowl.src = "./public/images/emptybowl.jpg";
    dog.className = 'dogSprite dogSpriteAnimMain'
  }
  else if (type == 2) {
    waterBowl.src = "./public/images/emptybowl.jpg";
    dog.className = 'dogSprite dogSpriteAnimMain'
  }
};

let addPuppy = () => {

  if (countaddPuppy == 0 || countaddPuppy < 0) {
    document.getElementById("notication").style.display = "block";
    document.getElementById("title-notication").innerHTML = `
    <span>M???i l?????t ch??i ch??? cho ph??p mua m???t </span>
    <br>
    <b>C??n con</b>
    `
  }
  else {
    if (coins < 100) {
      document.getElementById("notication").style.display = "block";
      document.getElementById("title-notication").innerHTML = `
    <span>B???n kh??ng ????? ??i???m ????? mua th??m</span>
    <br>
    <b>C??n con</b>
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
  countaddPuppy -= 1;
}
let configTypeButton = (type) => {
  if (type === "none") {
    document.querySelector('button').disabled = true;
  } else {
    document.querySelector('button').disabled = false;
  }

}
let addHouse = () => {
  if (countaddHouse == 0 || countaddHouse < 0) {
    document.getElementById("notication").style.display = "block";
    document.getElementById("title-notication").innerHTML = `
    <span>M???i l?????t ch??i ch??? cho ph??p mua m???t </span>
    <br>
    <b>Nh?? cho th?? c??ng</b>
    `
  } else {
    if (coins < 150) {
      document.getElementById("notication").style.display = "block";
      document.getElementById("title-notication").innerHTML = `
      <span>B???n kh??ng ????? ??i???m ????? mua </span>
      <br>
      <b>Nh?? cho th?? c??ng</b>
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
  countaddHouse -= 1;
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
  setInterval(time, 10000);
  setInterval(poopGen, 7000);
}
let continueGame = () => {
  coins = 100;
  count = 2
  hunger = 100;
  thirst = 100;
  happiness = 100;
  startGames.style.display = "none";
  coinCount.style.display = "flex"
  gridCont.style.display = "block";
  time();
  poopGen();
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
}

let closeTempalteHelp = () => {
  document.getElementById("template-help").style.display = "none";
  // document.getElementById("template-help").style.animation
}
//  demo pull request
