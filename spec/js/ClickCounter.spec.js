describe('Click Counter Tests:', () => {
    describe('ClickCounter() records clicks and gives the clickCount', () => {
        let underTest;
        beforeEach(() => {
            underTest = new ClickCount();
        });
        it('ClickCounter() 1 time should result in a clickCount of 1', () => {
            underTest.countClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('ClickCounter() 2 times should results in clickCount of 2', () => {
            underTest.countClick();
            underTest.countClick();
            expect(underTest.clickCount).toBe(2);
        });
    });
    describe('Buying companions functions', () => {
        let clickTest;
        beforeEach(() => {
            clickTest = new ClickCount();
            clickTest.clickCount = 101;
            clickTest.companionCost = 100;
        });
        it('buyNewCompanion should increase number of companions', () => {
            clickTest.buyNewCompanion();
            expect(clickTest.companionCount).toBe(1);
        });
        it('buyNewCompanion should reduce click count', () => {
            clickTest.buyNewCompanion();
            expect(clickTest.clickCount).toBe(1);
        });
        it('buyNewCompanion should increase companion cost', () => {
            clickTest.buyNewCompanion();
            expect(clickTest.companionCost).toBe(120);
        })
    });
    describe('Buying multipliers functions', () => {
        let testClick;
        beforeEach(() => {
            testClick = new ClickCount();
            testClick.clickCount = 10;
            testClick.clickValue = 1;
        });
        it('buying new multiplier should increase multiplier cost', () => {
            testClick.buyNewMultiplier();
            expect(testClick.multiplierCost).toBe(13);
        });
        it('buying new multiplier should increase click value', () => {
            testClick.buyNewMultiplier();
            expect(testClick.clickValue).toBe(1.2);
        })
        it('buying new multiplier should descrease click count', () => {
            testClick.buyNewMultiplier();
            expect(testClick.clickCount).toBe(0);
        });
        it('buying multipliers should increase number of multipliers', () => {
            testClick.buyNewMultiplier();
            expect(testClick.multiplierCount).toBe(1);
        });
    });
    describe('Reset button functions', () => {
        let testy;
        beforeEach(() => {
            testy = new ClickCount;
            testy.clickCount = 10000;
            testy.clickValue = 10000;
            testy.companionCost = 10000;
            testy.multiplierCost = 10000;
            testy.companionCount = 10000;
            testy.multiplierCount = 10000;
        });
        it('hitting reset should reset click count', () => {
            reset(testy);
            expect(testy.clickCount).toBe(0);
        });
        it('hitting reset should reset click value', () => {
            reset(testy);
            expect(testy.clickValue).toBe(1);
        });
        it('hitting reset should reset multiplier cost', () => {
            reset(testy);
            expect(testy.multiplierCost).toBe(10);
        });
        it('hitting reset should reset multiplier count', () => {
            reset(testy);
            expect(testy.multiplierCount).toBe(0);
        });
        it('hitting reset should reset companion count', () => {
            reset(testy);
            expect(testy.companionCount).toBe(0);
        });
        it('hitting reset should reset companion cost', () => {
            reset(testy);
            expect(testy.companionCost).toBe(100);
        });
    });

})