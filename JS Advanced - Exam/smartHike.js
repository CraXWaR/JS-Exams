class SmartHike {
    constructor (username) {
        this.username = username
        this.goals = {}
        this.listOfHikes = []
        this.resources = 100
    }
    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resources == 0) {
            throw new Error("You don't have enough resources to start the hike")
        }
        let timeMulty = time * 10
        let diff = this.resources - timeMulty
        if (diff < 0) {
            return "You don't have enough resources to complete the hike"
        }
        this.resources = this.resources - timeMulty
        this.listOfHikes.push({
            peak,
            time,
            difficultyLevel
        })
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
    rest(time) {
        let timeMultyply = time * 10
        this.resources = this.resources + timeMultyply
        if (this.resources > 100) {
            this.resources = 100
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${timeMultyply}% resources`
    }
    showRecord(criteria) {
        
    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));
