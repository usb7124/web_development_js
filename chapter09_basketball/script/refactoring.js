let comScore = 0;
let userScore = 0;
let isComputerTurn = true;
let shootLeft = 15;

// 여기에 리펙토링의 첫번째 단계 함수화 진행 -> 반복되는데 짧아서 대체 가능한 애

function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
}

function updateComScore(score) {
  let comScoreElement = document.getElementById('computer-score');
  comScore += score;
  comScoreElement.innerHTML = comScore;
}

function updateUserScore(score) {
  let userScoreElement = document.getElementById('user-score');
  userScore += score;
  userScoreElement.innerHTML = userScore;
}

function disabledComButton(flag) {
  let computerButtons = document.getElementsByClassName('btn-computer');

  for ( let i = 0 ; i < computerButtons.length ; i++) {
    computerButtons[i].disabled = flag;
  }
}

function disabledUserButton(flag) {
  let userButtons = document.getElementsByClassName('btn-user');

  for ( let i = 0 ; i < userButtons.length ; i++) {
    userButtons[i].disabled = flag;
  } 
}

// 여기에 시나리오 관련한 함수를 작성할 예정
function updateAI() {
  let difference = userScore - comScore
  let shootType = Math.random() < 0.5 ? 2 : 3;

  if(difference >= 6) {
    comPercent2 = 0.6;
    comPercent3 = 0.38;
  } else if(difference >= 10) {
    comPercent2 = 0.7;
    comPercent3 = 0.43;
  } else if(difference <= -6) {
    comPercent2 = 0.4;
    comPercent3 = 0.28;
  } else if(difference <= -10) {
    comPercent2 = 0.3;
    comPercent3 = 0.23;
  }
}

// 기능 구현 완료 후에 리펙토링이 적용되는 부분

function onComputerShoot() {
  if(!isComputerTurn) return;

  updateAI()

  let shootType = Math.random() < 0.5 ? 2 : 3;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText('컴퓨터가 2점슛을 성공시켰습니다');
      updateComScore(2);
    } else {
      showText('컴퓨터가 2점슛을 실패했습니다');
    }
  } else {
    if(Math.random() < 0.33) {
      showText('컴퓨터가 3점슛을 성공시켰습니다');
      updateComScore(2);
    } else {
      showText('컴퓨터가 3점슛을 실패했습니다');
    }
  }
  isComputerTurn = false;
  disabledComButton(true);
  disabledUserButton(false);
}

function onUserShoot(shootType) {
  if(isComputerTurn) return;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText('2점슛을 성공시켰습니다');
      updateUserScore(2);
    } else {
      showText('2점슛을 실패했습니다');
    }
  } else {
    if(Math.random() < 0.33) {
      showText('3점슛을 성공시켰습니다');
      updateUserScore(3);
    } else {
      showText('3점슛을 실패했습니다');
    }
  }

  isComputerTurn = true;
  disabledComButton(false);
  disabledUserButton(true);

  shootLeft --;

  let shootLeftElement = document.getElementById('shots-left')
  shootLeftElement.innerHTML = shootLeft;

  if (shootLeft === 0) {
    if (userScore > comScore) {
      alert('이겼습니다');
      showText('이겼습니다');
    } else if (userScore < comScore) {
      alert('졌습니다');
      showText('졌습니다');
    }else {
      alert('비겼습니다');
      showText('비겼습니다');
    }
  }
}