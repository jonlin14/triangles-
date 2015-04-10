describe('triangleCheck', function() {
    it("it should return triangle if it recieves three inputs", function() {
        expect(triangleCheck(1,2,3)).to.equal('triangle');
    });
    it("it should return equilateral triangle if all three inputs are equal", function() {
        expect (triangleCheck(2,2,2)).to.equal('equilateral triangle');
    });

});
