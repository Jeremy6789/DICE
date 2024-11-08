// 獲取 DOM 元素
const playerDice1 = document.getElementById("player-dice-1");
const playerDice2 = document.getElementById("player-dice-2");
const hostDice1 = document.getElementById("host-dice-1");
const hostDice2 = document.getElementById("host-dice-2");
const playerScore = document.getElementById("player-score");
const hostScore = document.getElementById("host-score");
const message = document.getElementById("message");
const rollButton = document.getElementById("roll-button");

// 隨機生成點數 (1 到 6)
function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// 更新骰子樣式
function updateDice(diceElement, value) {
  diceElement.className = "dice"; // 移除先前的 class
  diceElement.classList.add(`dice-${value}`);
}

// 更新分數和訊息
function updateScore(playerTotal, hostTotal) {
  playerScore.textContent = `總分：${playerTotal}`;
  hostScore.textContent = `總分：${hostTotal}`;

  if (playerTotal > hostTotal) {
    message.textContent = "恭喜你贏了！";
  } else if (playerTotal < hostTotal) {
    message.textContent = "很可惜你輸了~";
  } else {
    message.textContent = "平手！再試一次~";
  }
}

// 擲骰子按鈕事件
rollButton.addEventListener("click", () => {
  rollButton.disabled = true; // 禁用按鈕，防止重複點擊

  // 產生隨機點數
  const playerDiceValues = [randomDice(), randomDice()];
  const hostDiceValues = [randomDice(), randomDice()];

  // 更新骰子樣式
  updateDice(playerDice1, playerDiceValues[0]);
  updateDice(playerDice2, playerDiceValues[1]);
  updateDice(hostDice1, hostDiceValues[0]);
  updateDice(hostDice2, hostDiceValues[1]);

  // 計算總分
  const playerTotal = playerDiceValues[0] + playerDiceValues[1];
  const hostTotal = hostDiceValues[0] + hostDiceValues[1];

  // 更新分數和訊息
  updateScore(playerTotal, hostTotal);

  // 等待動畫結束後啟用按鈕
  setTimeout(() => {
    rollButton.disabled = false;
  }, 1000);
});
