const player=document.getElementById('options')
const result=document.querySelector('.result')
const choices=document.querySelector('.showChoices')


player.addEventListener('click',function(e){
      
if (e.target.tagName==='IMG'){
    //player choice
    const playerChoice = e.target.parentNode.className
     console.log( playerChoice)
    

    //computer's choice
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    showchoices(playerChoice,computerChoice)
    getWinner(playerChoice,computerChoice)
      }
      
})


function showchoices(playerChoice,computerChoice){
choices.innerHTML = `<p>You choosed ${playerChoice} and computer choosed ${computerChoice}</p>`;
  console.log('inside Sc');
} 

function getWinner(playerChoice,computerChoice){
  if (playerChoice===computerChoice){
    result.innerHTML = `<h4>It's a TIE !!!</h4>`;
  }

  else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') ||
  (playerChoice === 'Paper' && computerChoice === 'Rock') ||
  (playerChoice === 'Scissors' && computerChoice === 'Paper')) 
  {
    result.innerHTML = `<h4>You WON !!!</h4>`;
  }

  else 
  {
    result.innerHTML = `<h4>You LOSE !!!</h4>`
}

}
