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
    describe('Buying companions functions',()=>{
        let clickTest;
        beforeEach(()=>{
            clickTest = new ClickCount();
            clickTest.clickCount = 101;
        });
        it('buyNewCompanion should increase number of companions',()=>{
            clickTest.buyNewCompanion();
            expect(clickTest.companionCount).toBe(1);
        });
        it('buyNewCompanion should reduce click count',()=>{
            clickTest.buyNewCompanion();
            expect(clickTest.clickCount).toBe(1);
        });
        it('buyNewCompanion should increase companion cost',()=>{
            clickTest.buyNewCompanion();
            expect(clickTest.companionCost).toBe(110);
        })
    });

})