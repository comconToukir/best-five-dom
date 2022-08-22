const olLength = () => {
  return document.getElementById('selected-list').childElementCount;
}

const getValue = (id) => {
  const value = document.getElementById(id).value;
  if(isNaN(value)){
    alert('Please enter number only');
  } else if(value < 0) {
    alert('Please enter a positive amount');
  } else {
    return parseInt(value);
  }
}

const setInnerText = (id, value) => {
  document.getElementById(id).innerText = '$' + value;
}

const playerExpense = () => {
  const perPlayer = getValue('player-rate');
  const playerCount = olLength();
  const expense = perPlayer * playerCount;

  return expense;
}

document.getElementById('player-cards').addEventListener('click', (e) => {
  if(e.target.innerText !== "SELECT") {
    return;
  } else if (olLength() >= 5) {
    alert('You Have Already Selected Your Team');
  } else { 
    const playerName = e.target.parentNode.firstElementChild.innerText;
    const li = document.createElement('li');
    li.classList.add('mb-2');
    li.innerText = playerName;
    document.getElementById('selected-list').appendChild(li);
    e.target.setAttribute('disabled', 'true');
  }
})

document.getElementById('calculate-expense-btn').addEventListener('click', () => {
  const playerTotal = playerExpense();
  if(isNaN(playerTotal)) {
    return;
  }
  setInnerText('player-expenses', playerTotal);
})

document.getElementById('calculate-total-btn').addEventListener('click', () => {
  const managerExpense = getValue('manager-rate');
  const coachExpense = getValue('coach-rate');
  const playerTotal = playerExpense();

  const teamTotalExpense = managerExpense + coachExpense + playerTotal;

  if(isNaN(teamTotalExpense)) {
    return;
  }
  setInnerText('total-expenses', teamTotalExpense);
})