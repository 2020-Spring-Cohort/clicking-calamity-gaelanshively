class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCost = 100;
        this.companionCount = 0;
        this.clickValue = 1;

    }
    countClick() {
        this.clickCount++;
        document.getElementById("displayCount").innerHTML = this.clickCount;
    }

    buyNewCompanion() {
        if (this.clickCount >= this.companionCost) {
            this.clickCount = this.clickCount - this.companionCost;
            this.companionCost = this.companionCost * 1.1;
            this.companionCost = Math.round(this.companionCost);
            this.companionCount++;
            document.getElementById("displayCompanionCost").innerHTML = this.companionCost;
            document.getElementById("displayCount").innerHTML = user.clickCount;
            document.getElementById("displayCompanionCount").innerHTML = this.companionCount;
        }
    }

    autoClick(user) {
        user.clickCount = user.clickCount + user.companionCount;

        document.getElementById("displayCount").innerHTML = user.clickCount;
    };
    
}

let user = new ClickCount;
let timer = window.setInterval(user.autoClick, 1000, user);