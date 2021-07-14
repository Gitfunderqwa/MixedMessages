// This is going to make random Messages appear on run
const d = new Date
const time = d.getHours()
const timeOfDayArray = ['morning', 'afternoon', 'evening']
const randomTimeOfDay = timeOfDayArray[Math.floor(Math.random() * timeOfDayArray.length)]
// my Object with messages
const reminders = {
    morning: {
        messages: ['Good Morning.', 'Wonderful day today!', 'Fine morning to you.'],
        chores: ['brush your teeth :D', 'feed the dogs', 'feed the cats'],
    },
    afternoon: {
        messages: ['Good afternoon.', 'Midday to you.', 'How was your morning?'],
        chores: ['make lunch for family', 'fetch brother from school', 'read 15 pages of your book']
    },
    evening: {
        messages: ['Good Evening.', 'Good Night!', 'How was your day?'], 
        chores: ['feed the animals', 'turn on the outside lights', 'lock all the doors']
    },
    morningmessage(morningPhrase) {
        this.morning.messages.push(morningPhrase)
    },
    afternoonMessage(afternoonPhrase) {
        this.afternoon.messages.push(afternoonPhrase)
    },
    eveningMessage(eveningPhrase) {
        this.evening.messages.push(eveningPhrase)
    },
    morningChore(chore) {
        this.morning.chores.push(chore)
    },
    afternoonChore(chore) {
        this.afternoon.chores.push(chore)
    },
    eveningChore(chore) {
        this.evening.chores.push(chore)
    }
}

const mixedMessage = () => {
    if (time < 12) {
        console.log(reminders.morning.messages[Math.floor(Math.random() * reminders.morning.messages.length)] + ' Dont forget to ' + reminders.morning.chores[Math.floor(Math.random() * reminders.morning.chores.length)] + '.')
    } else if ( time < 18) {
        console.log(reminders.afternoon.messages[Math.floor(Math.random() * reminders.afternoon.messages.length)] + ' Dont forget to ' + reminders.afternoon.chores[Math.floor(Math.random() * reminders.afternoon.chores.length)] + '.')
    } else if ( time < 24) {
        console.log(reminders.evening.messages[Math.floor(Math.random() * reminders.evening.messages.length)] + ' Dont forget to ' + reminders.evening.chores[Math.floor(Math.random() * reminders.evening.chores.length)] + '.')
    } else {
        return 'Check your spelling, make sure you are using either: morning, afternoon or evening.'
    }
}
console.log(time + '')
reminders.eveningMessage('Time to wind down.')
console.log(mixedMessage())