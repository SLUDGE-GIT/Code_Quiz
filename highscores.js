let highScoreList = document.querySelector('#highScoreList')
let clearHighScore = document.querySelector('#clearHighScore')
let previousPage = document.querySelector('#previousPage')

// should  pull from local storage so if they come back to the website later - the high score list will still be populated (if they dont hit clear)
let allHighScores = localStorage.getItem('allHighScores');
allHighScores = JSON.parse(allHighScores);

if (allHighScores !== null){

    for (let i = 0; i < allHighScores.length; i++){

        let newLi = document.createElement('li');

        newLi.textContent = allHighScores[i].initials + ' ' + allHighScores[i].score;
    highScoreList.appendChild(newLi);
    

    }


}

//should clear score and reload current document
reset.addEventListener('click', function(){
localStorage.clear();
location.reload();
});


// allows user to go back to main page (index.html)
previousPage.addEventListener('click', function(){
window.location.replace('./index.html');

});