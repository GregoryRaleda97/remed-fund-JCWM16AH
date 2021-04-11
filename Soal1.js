function submitHitung() {
    let sentence = document.getElementById("inputHuruf").value;
    let vocalDictionary = 'aiueo'
    let vocal = ''
    let consonant = ''
    let transformedSentence = ''
    let lowerSentence = sentence.toLowerCase();

    for (let i = 0; i < lowerSentence.length; i++) {
        let isVocal = vocalDictionary.includes(lowerSentence[i])

        if (isVocal) {
            if (!vocal.includes(lowerSentence[i])) {
                vocal += lowerSentence[i]
            }
        } else if (!isVocal && lowerSentence[i] != ' ') {
            if (!consonant.includes(lowerSentence[i])) {
                consonant += lowerSentence[i]
            }
        }
    }

    let sentenceArray = lowerSentence.split(' ')

    for (let i = 0; i < sentenceArray.length; i++) {
        transformedSentence += sentenceArray[i][0].toUpperCase()
        transformedSentence += sentenceArray[i].slice(1)
        transformedSentence += ' '
    }
    document.getElementById("result").innerHTML = `<p>Hasil = ada ${vocal.length} huruf vokal berdampingan</p>`
}

function submitHuruf() {
    let sentence = document.getElementById("inputHuruf").value;
    let vocalDictionary = 'aiueo'
    let vocal = ''
    let consonant = ''
    let transformedSentence = ''
    let lowerSentence = sentence.toLowerCase();

    for (let i = 0; i < lowerSentence.length; i++) {
        let isVocal = vocalDictionary.includes(lowerSentence[i])

        if (isVocal) {
            if (!vocal.includes(lowerSentence[i])) {
                vocal += lowerSentence[i]
            }
        } else if (!isVocal && lowerSentence[i] != ' ') {
            if (!consonant.includes(lowerSentence[i])) {
                consonant += lowerSentence[i]
            }
        }
    }

    let sentenceArray = lowerSentence.split(' ')

    for (let i = 0; i < sentenceArray.length; i++) {
        transformedSentence += sentenceArray[i][0].toUpperCase()
        transformedSentence += sentenceArray[i].slice(1)
        transformedSentence += ' '
    }
    document.getElementById("result").innerHTML = `<p>Huruf vokal : ${vocal}</p>`
}

function submitTanpa() {
    let sentence = document.getElementById("inputHuruf").value;
    let vocalDictionary = 'aiueo'
    let vocal = ''
    let consonant = ''
    let transformedSentence = ''
    let lowerSentence = sentence.toLowerCase();

    for (let i = 0; i < lowerSentence.length; i++) {
        let isVocal = vocalDictionary.includes(lowerSentence[i])

        if (isVocal) {
            if (!vocal.includes(lowerSentence[i])) {
                vocal += lowerSentence[i]
            }
        } else if (!isVocal && lowerSentence[i] != ' ') {
            if (!consonant.includes(lowerSentence[i])) {
                consonant += lowerSentence[i]
            }
        }
    }

    let sentenceArray = lowerSentence.split(' ')

    for (let i = 0; i < sentenceArray.length; i++) {
        transformedSentence += sentenceArray[i][0].toUpperCase()
        transformedSentence += sentenceArray[i].slice(1)
        transformedSentence += ' '
    }
    document.getElementById("result").innerHTML = `<p>Tanpa Vokal : ${consonant}</p>`
}

