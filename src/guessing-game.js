class GuessingGame {
    constructor() {
        this.min=0;
        this.max=0;
        this.num=0;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max-1;
    }

    guess() {
         this.num=Math.floor((this.min+this.max)/2)+1;
        return this.num;
    }

    lower() {
        this.max=this.num-1;
    }

    greater() {
        this.min=this.num;
    }
}

module.exports = GuessingGame;
