describe('triangleCheck', function() {
    it("it should return Scalene Triangle if it recieves three inputs that are not equal to each other", function() {
        expect(triangleCheck(1,2,3)).to.equal('Scalene Triangle');
    });
    it("it should return Equilateral Triangle if all three inputs are equal", function() {
        expect (triangleCheck(2,2,2)).to.equal('Equilateral Triangle');

    });
    it("it should return Isoceles Triangle if only two sides are equal to each other, testing input 1 and input 2 are euql", function() {
        expect(triangleCheck(3,3,5)).to.equal('Isoceles Triangle');
    });
    it("it should return Isoceles Triangle if only two sides are equal to each other, testing input 2 and input 3 are equal", function() {
        expect(triangleCheck(2,4,4)).to.equal('Isoceles Triangle');
    });
    it("it should return not a Triangle if one side is greater than the length of ther other two sides combined", function() {
        expect(triangleCheck(100,100,201)).to.equal('Not a Triangle');
    });


});
