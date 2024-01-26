const player1=document.getElementById("player1");
const player2=document.getElementById("player2");

const winner=document.createElement('p');//to show winner
let playGame=true;




if (playGame){
    const player1Choice=getPlayerChoice(player1)
    const player2Choice=getPlayerChoice(player2)
    console.log(player1Choice);
    console.log(player2Choice);
    player1.addEventListener('click',function(e){
        
        if (e.target.tagName==='IMG'){
        //    console.log(e.target.parentNode.className)
        }
        else{
            // console.log(e.target.className);
        }
    })
    
}
function getPlayerChoice(player, callback) {
    player.addEventListener('click', function (e) {
        let choice;

        if (e.target.tagName === 'IMG') {
          choice = e.target.parentNode.className;
        } else {
          choice = e.target.className;
        }
    
        // Check if the callback is a function before invoking it
        if (typeof callback === 'function') {
          callback(choice);
        }
      });
  }



function getWinner(player1_choice,player2_choice){

}


