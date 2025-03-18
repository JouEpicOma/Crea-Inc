function triggerCardAnimation(ErnestHawks) {
    const animationPopup = document.createElement('div');
    animationPopup.classList.add('card-popup');
    animationPopup.innerHTML = `
        <div class="card-reveal">
            <img src="cards/${ErnestHawks}.png" alt="${ErnestHawks}" class="card-image">
            <br>
            <button onclick="claimCard('${ErnestHawks}')">Claim Card</button>
        </div>
    `;
    document.body.appendChild(animationPopup);
}

function claimCard(ErnestHawks) {
    let collectedCards = JSON.parse(localStorage.getItem('collectedCards')) || [];
    if (!collectedCards.includes(ErnestHawks)) {
        collectedCards.push(ErnestHawks);
        localStorage.setItem('collectedCards', JSON.stringify(ErnestHawks));
    }
    alert(`You've collected the ${ErnestHawks} card!`);
    document.querySelector('.card-popup').remove();
}

function loadCollection() {
    const collectionDiv = document.getElementById('card-collection');
    const collectedCards = JSON.parse(localStorage.getItem('collectedCards')) || [];
    collectionDiv.innerHTML = collectedCards.map(card =>
        `<div class="card"><img src="cards/${card}.png" alt="${card}" class="card-image"></div>`
    ).join('');
}
