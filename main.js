// This is going to make random Messages appear on run
const timeOfDayArray = ['morning', 'afternoon', 'evening']
const randomTimeOfDay = timeOfDayArray[Math.floor(Math.random() * timeOfDayArray.length)]
// my Object with messages
const messages = {
    morningMessage:  ['Good Morning', 'Wonderful day today!', 'Fine morning to you'],
    afternoonMessage: ['Good afternoon', 'midday to you', 'How was your morning?'],
    eveningMessage: ['Good Evening', 'Good Night', 'How was your day?'],
}

const mixedMessage = (timeofday = randomTimeOfDay) => {
    const randomIndex = Math.floor(Math.random() * messages.morningMessage.length)
    if (typeof timeofday != 'string') {
        return 'time of day must be either: morning, afternoon, evening.'
    }
    if (timeofday === 'morning') {
        console.log(messages.morningMessage[randomIndex])
    } else if ( timeofday === 'afternoon') {
        console.log(messages.afternoonMessage[randomIndex])
    } else if ( timeofday === 'evening') {
        console.log(messages.eveningMessage[randomIndex])
    } else {
        return 'Check your spelling, make sure you are using either: morning, afternoon or evening.'
    }
}

console.log(mixedMessage())