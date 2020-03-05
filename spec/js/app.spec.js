describe("countClick increases clicks",()=>{
    It("Clicking once sets count to ", ()=>{
        let clickCount = 0;
        countClick();
        expect(clickCount).toBe(1);
    });
})