describe('triangleCheck', function() {
    it("it should return triangle if it recieves three inputs", function() {
        expect(triangleCheck(1,2,3)).to.equal('triangle');
    });
    it("it should return equilateral triangle if all three inputs are equal", function() {
        expect (triangleCheck(2,2,2)).to.equal('equilateral triangle');

    });
    it("it should return scalene triangle if only two sides are equal to each other, testing input 1 and input 2 are euql", function() {
        expect(triangleCheck(3,3,5)).to.equal('scalene triangle');
    });
    it("it should return scalene triangle if only two sides are equal to each other, testing input 2 and input 3 are equal", function() {
        expect(triangleCheck(2,4,4)).to.equal('scalene triangle');
    });

});
