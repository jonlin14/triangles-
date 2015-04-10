var triangleCheck = function(input1, input2, input3) {
    if ((input1) && (input2) && (input3))
    {
        if ((input1 === input2) && (input1 === input3))
        {
            return 'equilateral triangle';
        }
        
        else if (input1 === input2)
        {
            return 'scalene triangle';
        }
        else if (input2 === input3)
        {
            return 'scalene triangle';
        }
    }


};
