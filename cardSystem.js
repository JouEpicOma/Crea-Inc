// cardSystem.js

function triggerCardAnimation(cardName) {
    const animationPopup = document.createElement('div');
    animationPopup.classList.add('card-popup');
    animationPopup.innerHTML = `
        <div class="card-reveal">
            <img src="cards/${cardName}.png" alt="${cardName}" class="card-image">
            <br>
            <button onclick="claimCard('${cardName}')">Claim Card</button>
        </div>
    `;
    document.body.appendChild(animationPopup);
}

function claimCard(cardName) {
    let collectedCards = JSON.parse(localStorage.getItem('collectedCards')) || [];
    if (!collectedCards.includes(cardName)) {
        collectedCards.push(cardName);
        localStorage.setItem('collectedCards', JSON.stringify(collectedCards));
    }
    alert(`You've collected the ${cardName} card!`);
    document.querySelector('.card-popup').remove();
}

function loadCollection() {
    const collectionDiv = document.getElementById('card-collection');
    const collectedCards = JSON.parse(localStorage.getItem('collectedCards')) || [];
    collectionDiv.innerHTML = collectedCards.map(card =>
        `<div class="card"><img src="cards/${card}.png" alt="${card}" class="card-image"></div>`
    ).join('');
}
