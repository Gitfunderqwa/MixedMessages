// This is going to make random Messages appear on run
const messages = {
    morningMessage: ['Good Morning', 'Wonderful day today!', 'Fine morning to you'],
    afternoonMessage: ['Good afternoon', 'midday to you', 'How was your morning?'],
    eveningMessage: ['Good Evening', 'Good Night', 'How was your day?'],
}

const mixedMessage = (timeofday) => {
    if (typeof timeofday != 'string') {
        return 'time of day must be either: morning, afternoon, evening.'
    } else if (timeofday != 'morning' || timeofday != 'afternoon' || timeofday != 'evening') {
        return 'Check your spelling input must be either: morning, afternoon, evening.'
    }
    return timeofday.toString()
}
