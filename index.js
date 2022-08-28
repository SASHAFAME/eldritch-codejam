let ancients = document.querySelectorAll('.ancient') 

const difficultyContainer = document.querySelector('.difficulty-container')

const buttons = document.querySelectorAll('.button')

const mixBtn = document.querySelector('.mix-button')

const deck = document.querySelector('.deck')

const backCard = document.querySelector('.back-card')

const levels = document.querySelectorAll('.level')

const stageTitle = document.querySelectorAll('.stage-title')

const resultCard = document.querySelector('.card-result')

let levelsArr = Array.from(levels)

const handleBtn = (event) => {
    if(event.target.classList.contains('active')) {
        buttons.forEach(btn => {
            btn.classList.remove('active')
            hideMixBtn()
        })
    } else
    buttons.forEach(btn => {
        btn.classList.remove('active')
        event.target.classList.add('active');
        showMixBtn()
        resultCard.style.backgroundImage = `url('./assets/mythicCardBackground2.png')`
    })
}

buttons.forEach(btn => {
    btn.addEventListener('click', handleBtn)
})

function showMixBtn() {
    mixBtn.classList.add('active')
    deck.classList.remove('active')
}

function hideMixBtn() {
    mixBtn.classList.remove('active')
}

function showDifficulty() {
    difficultyContainer.classList.add('active')

}

function hideDifficulty() {
    difficultyContainer.classList.remove('active')
}

function showDeck() {
    deck.classList.add('active')
}


mixBtn.addEventListener('click', myFunc)
function myFunc() {
    activeDifficulty()
    hideMixBtn()
    showDeck()
    activeAncient()
    stageTitle[1].classList.remove('active')
    stageTitle[2].classList.remove('active')
    resultCard.classList.add('active')
}




const handleClick = (event) => {

    if(event.target.classList.contains('active')) {
        ancients.forEach(ancient => {
            ancient.classList.remove('active');
            hideDifficulty()
        })
    } else
    ancients.forEach(ancient => {
        ancient.classList.remove('active');
        event.target.classList.add('active');
        showDifficulty()
    })
}

ancients.forEach(ancient => {
    ancient.addEventListener('click', handleClick)
})

const handleResult = (event) => {
    // console.log('Result')

}

backCard.addEventListener('click', handleResult)



// ALGORITHM START


function activeAncient() {
    let arr = Array.from(ancients)
    // console.log('activeAncient: ' + arr.findIndex(item => item.classList.contains('active')))
    const curAncient = arr.findIndex(item => item.classList.contains('active'))
    const ancientPacks = [
        [1, 2, 1, 2, 3, 1, 2, 4, 0],
        [0, 2, 2, 1, 3, 0, 3, 4, 0],
        [0, 2, 1, 2, 3, 1, 3, 4, 0],
        [1, 2, 1, 3, 2, 1, 2, 4, 0],
        ]
        let currentPack = ancientPacks[0]
        if (curAncient === 0) {
            currentPack = ancientPacks[0]
            // console.log(currentPack)
            refreshDeck()
        } else if (curAncient === 1) {
            currentPack = ancientPacks[1]
            // console.log(currentPack)
            refreshDeck()
        } else if (curAncient === 2) {
            currentPack = ancientPacks[2]
            // console.log(currentPack)
            refreshDeck()
        } else if (curAncient === 3) {
            currentPack = ancientPacks[3]
            // console.log(currentPack)
            refreshDeck()
        } else
        console.log('current pack undefined')

        backCard.addEventListener('click', openCard)

        function getRandom(min, max) {
            return Math.round(Math.random() * (max- min) + min)
        }
        // console.log(getRandom(0, 2))

        function openCard() {
            if (currentPack[0]+currentPack[1]+currentPack[2] > 0) {
                if (currentPack[1] > 0) {
                    currentPack[1]--
                    refreshDeck()
                    resultCard.style.backgroundImage = brownCards[getRandom(0, brownCards.length)]
                    } else if (currentPack[0] > 0) {
                        currentPack[0]--
                        resultCard.style.backgroundImage = greenCards[getRandom(0, greenCards.length)]
                        refreshDeck()
                        } else if (currentPack[2] > 0) {
                            currentPack[2]--
                            resultCard.style.backgroundImage = blueCards[getRandom(0, blueCards.length)]
                            refreshDeck()
                        }
                } else if (currentPack[3]+currentPack[4]+currentPack[5] > 0) {
                    stageTitle[1].classList.add('active')
                    if (currentPack[5] > 0) {
                    currentPack[5]--
                    resultCard.style.backgroundImage = blueCards[getRandom(0, blueCards.length)]
                    refreshDeck()
                    } else if (currentPack[3] > 0) {
                        currentPack[3]--
                        resultCard.style.backgroundImage = greenCards[getRandom(0, greenCards.length)]
                        refreshDeck()
                        } else if (currentPack[4] > 0) {
                            currentPack[4]--
                            resultCard.style.backgroundImage = brownCards[getRandom(0, brownCards.length)]
                            refreshDeck()
                        }
                } else if (currentPack[6]+currentPack[7]+currentPack[8] > 0) {
                    stageTitle[2].classList.add('active')
                    if (currentPack[6] > 0) {
                    currentPack[6]--
                    resultCard.style.backgroundImage = greenCards[getRandom(0, greenCards.length)]
                    refreshDeck()
                    } else if (currentPack[8] > 0) {
                        currentPack[8]--
                        resultCard.style.backgroundImage = blueCards[getRandom(0, blueCards.length)]
                        refreshDeck()
                        } else if (currentPack[7] > 0) {
                            currentPack[7]--
                            resultCard.style.backgroundImage = brownCards[getRandom(0, brownCards.length)]
                            refreshDeck()
        }}}

        function refreshDeck() {
            levelsArr[0].innerHTML = currentPack[0]
            levelsArr[1].innerHTML = currentPack[1]
            levelsArr[2].innerHTML = currentPack[2]
            levelsArr[3].innerHTML = currentPack[3]
            levelsArr[4].innerHTML = currentPack[4]
            levelsArr[5].innerHTML = currentPack[5]
            levelsArr[6].innerHTML = currentPack[6]
            levelsArr[7].innerHTML = currentPack[7]
            levelsArr[8].innerHTML = currentPack[8]
            console.log(currentPack)
        }

}


// OPEN CARD START

let blueCards = [
    `url('./assets/MythicCards/blue/blue1.png')`,
    `url('./assets/MythicCards/blue/blue2.png')`,
    `url('./assets/MythicCards/blue/blue3.png')`,
    `url('./assets/MythicCards/blue/blue4.png')`,
    `url('./assets/MythicCards/blue/blue5.png')`,
    `url('./assets/MythicCards/blue/blue6.png')`,
    `url('./assets/MythicCards/blue/blue7.png')`,
    `url('./assets/MythicCards/blue/blue8.png')`,
    `url('./assets/MythicCards/blue/blue9.png')`,
    `url('./assets/MythicCards/blue/blue10.png')`,
    `url('./assets/MythicCards/blue/blue11.png')`,
    `url('./assets/MythicCards/blue/blue12.png')`,
]
const copyBlueCards = blueCards.slice()

let brownCards = [
    `url('./assets/MythicCards/brown/brown1.png')`,
    `url('./assets/MythicCards/brown/brown2.png')`,
    `url('./assets/MythicCards/brown/brown3.png')`,
    `url('./assets/MythicCards/brown/brown4.png')`,
    `url('./assets/MythicCards/brown/brown5.png')`,
    `url('./assets/MythicCards/brown/brown6.png')`,
    `url('./assets/MythicCards/brown/brown7.png')`,
    `url('./assets/MythicCards/brown/brown8.png')`,
    `url('./assets/MythicCards/brown/brown9.png')`,
    `url('./assets/MythicCards/brown/brown10.png')`,
    `url('./assets/MythicCards/brown/brown11.png')`,
    `url('./assets/MythicCards/brown/brown12.png')`,
    `url('./assets/MythicCards/brown/brown13.png')`,
    `url('./assets/MythicCards/brown/brown14.png')`,
    `url('./assets/MythicCards/brown/brown15.png')`,
    `url('./assets/MythicCards/brown/brown16.png')`,
    `url('./assets/MythicCards/brown/brown17.png')`,
    `url('./assets/MythicCards/brown/brown18.png')`,
    `url('./assets/MythicCards/brown/brown19.png')`,
    `url('./assets/MythicCards/brown/brown20.png')`,
    `url('./assets/MythicCards/brown/brown21.png')`,
]
const copyBrownCards = brownCards.slice()

let greenCards = [
    `url('./assets/MythicCards/green/green1.png')`,
    `url('./assets/MythicCards/green/green2.png')`,
    `url('./assets/MythicCards/green/green3.png')`,
    `url('./assets/MythicCards/green/green4.png')`,
    `url('./assets/MythicCards/green/green5.png')`,
    `url('./assets/MythicCards/green/green6.png')`,
    `url('./assets/MythicCards/green/green7.png')`,
    `url('./assets/MythicCards/green/green8.png')`,
    `url('./assets/MythicCards/green/green9.png')`,
    `url('./assets/MythicCards/green/green10.png')`,
    `url('./assets/MythicCards/green/green11.png')`,
    `url('./assets/MythicCards/green/green12.png')`,
    `url('./assets/MythicCards/green/green13.png')`,
    `url('./assets/MythicCards/green/green14.png')`,
    `url('./assets/MythicCards/green/green15.png')`,
    `url('./assets/MythicCards/green/green16.png')`,
    `url('./assets/MythicCards/green/green17.png')`,
    `url('./assets/MythicCards/green/green18.png')`,
]
const copyGreenCards = greenCards.slice()



function getRandom(min, max) {
    return Math.round(Math.random() * (max- min) + min)
}

resultCard.style.backgroundImage = brownCards[getRandom(0, 21)]

// OPEN CARD END

function activeDifficulty() {
    let arr = Array.from(buttons)
    let activeDiff = arr.findIndex(item => item.classList.contains('active'))
    console.log('activeDifficulty: ' + activeDiff)

    blueCards = copyBlueCards
    greenCards = copyGreenCards
    brownCards = copyBrownCards
    
    if (activeDiff === 0) {
        const easiestBlueCards = blueCards.slice(2,5).concat(blueCards.slice(9, 10))
        blueCards = easiestBlueCards

        const easiestBrownCards = brownCards.slice(10,14).concat(brownCards.slice(20,21))

        brownCards = easiestBrownCards

        const easiestGreenCards = greenCards.slice(0, 1).concat(greenCards.slice(11,12), greenCards.slice(15, 18))

        greenCards = easiestGreenCards

    } else if (activeDiff === 1) {
        const newBlueCards = blueCards.slice(2,5).concat(blueCards.slice(8,12), blueCards.slice(6, 7))

        blueCards = newBlueCards

        const newBrownCards = brownCards.slice(0,5).concat(brownCards.slice(10,21))

        brownCards = newBrownCards

        const newGreenCards = greenCards.slice(0, 1).concat(greenCards.slice(6,18))

        greenCards = newGreenCards

    } else if (activeDiff === 2) {

        blueCards = copyBlueCards

        greenCards = copyGreenCards

        brownCards = copyBrownCards
    } else if (activeDiff === 3) {

        const hardBlueCards = blueCards.slice(0,2).concat(blueCards.slice(5,9), blueCards.slice(10,12))

        blueCards = hardBlueCards

        const hardBrownCards = brownCards.slice(0, 10).concat(brownCards.slice(14,20))

        brownCards = hardBrownCards
        
        const hardGreenCards = greenCards.slice(1, 11).concat(greenCards.slice(12, 15))

        greenCards = hardGreenCards
    } else if (activeDiff === 4) {

        const hardBlueCards = blueCards.slice(0,2).concat(blueCards.slice(5,6), blueCards.slice(7,8))

        blueCards = hardBlueCards

        const hardBrownCards = brownCards.slice(5, 10)

        brownCards = hardBrownCards
        
        const hardGreenCards = greenCards.slice(1, 6)

        greenCards = hardGreenCards
    }
        
}

// ALGORITHM END