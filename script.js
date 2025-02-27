const dotPositions = {
  1: [[50, 50]],  // 中心
  2: [[30, 30], [70, 70]],  // 左上，右下
  3: [[30, 30], [50, 50], [70, 70]],  // 左上，中心，右下
  4: [[20, 20], [20, 80], [80, 20], [80, 80]],  // 左上，左下，右上，右下
  5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],  // 左上，左下，中心，右上，右下
  6: [[20, 20], [20, 50], [20, 80], [80, 20], [80, 50], [80, 80]]  // 左上，左中，左下，右上，右中，右下
};

// 隨機生成點數
function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// 創建骰子並顯示白點
function createDice(value) {
  const dice = document.createElement('div');
  dice.className = 'dice';

  // 根據點數生成白點
  dotPositions[value].forEach(([top, left]) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.position = 'absolute'; // 確保點位置
    dot.style.top = `${top}%`;
    dot.style.left = `${left}%`;
    dot.style.transform = 'translate(-50%, -50%)'; // 這一行確保白點居中
    dice.appendChild(dot);
  });

  return dice;
}

// 投擲骰子功能
function rollDice() {
  const playerDiceContainer = document.getElementById('playerDice');
  const hostDiceContainer = document.getElementById('hostDice');
  const playerScoreElement = document.getElementById('playerScore');
  const hostScoreElement = document.getElementById('hostScore');
  const messageElement = document.getElementById('message');

  // 清除骰子容器中的內容
  playerDiceContainer.innerHTML = '';
  hostDiceContainer.innerHTML = '';

  // 生成新的點數
  const playerDiceValues = [randomDice(), randomDice()];
  const hostDiceValues = [randomDice(), randomDice()];

  // 顯示玩家的骰子
  let playerTotal = 0;
  playerDiceValues.forEach(value => {
    playerTotal += value;
    playerDiceContainer.appendChild(createDice(value));
  });
  playerScoreElement.textContent = `總分：${playerTotal}`;

  // 顯示關主的骰子
  let hostTotal = 0;
  hostDiceValues.forEach(value => {
    hostTotal += value;
    hostDiceContainer.appendChild(createDice(value));
  });
  hostScoreElement.textContent = `總分：${hostTotal}`;

  // 判定勝負
  if (playerTotal > hostTotal) {
    messageElement.textContent = "恭喜你贏了！";
  } else if (playerTotal < hostTotal) {
    messageElement.textContent = "很可惜你輸了~";
  } else {
    messageElement.textContent = "平手！再試一次~";
  }
}
