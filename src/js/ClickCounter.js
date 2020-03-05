class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCost = 100;
        this.companionCount = 0;
        this.clickValue = 1;
        this.multiplierCost = 10;
        this.multiplierCount = 0;

    }
    countClick() {
        this.clickCount = this.clickCount + this.clickValue;
        document.getElementById("displayCount").innerHTML = Math.round(this.clickCount);
    }

    buyNewCompanion() {
        if (this.clickCount >= this.companionCost) {
            this.clickCount = this.clickCount - this.companionCost;
            this.companionCost = this.companionCost * 1.2;
            this.companionCost = Math.round(this.companionCost);
            this.companionCount++;
            document.getElementById("displayCompanionCost").innerHTML = this.companionCost;
            document.getElementById("displayCount").innerHTML = Math.round(user.clickCount);
            document.getElementById("displayCompanionCount").innerHTML = this.companionCount;
        }
    }

    buyNewMultiplier(){
        if(this.clickCount >= this.multiplierCost){
            this.clickCount = this.clickCount - this.multiplierCost;
            this.multiplierCost = this.multiplierCost * 1.3;
            this.multiplierCount++;
            this.multiplierCost = Math.round(this.multiplierCost);
            this.clickValue = this.clickValue * 1.2;
            document.getElementById("displayMultiplierCost").innerText = this.multiplierCost;
            document.getElementById("displayMultiplierCount").innerText = this.multiplierCount;
        }
    }

    autoClick(user) {
        user.clickCount = user.clickCount + (user.clickValue * user.companionCount);
        document.getElementById("displayCount").innerHTML = Math.round(user.clickCount);
    };
    
}

let user = new ClickCount;
let timer = window.setInterval(user.autoClick, 1000, user);