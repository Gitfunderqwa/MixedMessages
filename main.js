// This is going to make random Messages appear on run
const timeOfDayArray = ['morning', 'afternoon', 'evening']
const randomTimeOfDay = timeOfDayArray[Math.floor(Math.random() * timeOfDayArray.length)]
// my Object with messages
const messages = {
    morningMessages:  ['Good Morning.', 'Wonderful day today!', 'Fine morning to you.'],
    afternoonMessages: ['Good afternoon.', 'Midday to you.', 'How was your morning?'],
    eveningMessages: ['Good Evening.', 'Good Night!', 'How was your day?'],
    morningMessage(morningPhrase) {
        this.morningMessages.push(morningPhrase)
    },
    afternoonMessage(afternoonPhrase) {
        this.afternoonMessages.push(afternoonPhrase)
    },
    eveningMessage(eveningPhrase) {
        this.eveningMessages.push(eveningPhrase)
    }
}

const mixedMessage = () => {
    const randomIndexMorning = Math.floor(Math.random() * messages.morningMessages.length)
    const randomIndexAfternoon = Math.floor(Math.random() * messages.afternoonMessages.length)
    const randomIndexEvening = Math.floor(Math.random() * messages.eveningMessages.length)
    if (typeof randomTimeOfDay != 'string') {
        return 'time of day must be either: morning, afternoon, evening.'
    }
    if (randomTimeOfDay === 'morning') {
        console.log('It is currently ' + randomTimeOfDay + '. ' + messages.morningMessages[randomIndexMorning])
    } else if ( randomTimeOfDay === 'afternoon') {
        console.log('It is currently ' + randomTimeOfDay + '. ' + messages.afternoonMessages[randomIndexAfternoon])
    } else if ( randomTimeOfDay === 'evening') {
        console.log('It is currently ' + randomTimeOfDay + '. ' + messages.eveningMessages[randomIndexEvening])
    } else {
        return 'Check your spelling, make sure you are using either: morning, afternoon or evening.'
    }
}
messages.eveningMessage('I am off to bed.')
console.log(mixedMessage())