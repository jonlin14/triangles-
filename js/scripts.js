var triangleCheck = function(input1, input2, input3) {
    var half_Total = ((parseInt(input1) + parseInt(input2) + parseInt(input3)) / 2);
    if ((input1 > half_Total) || (input2 > half_Total) || (input3 > half_Total))
    {
        return 'Not a Triangle';
    }
    else
    {
        if ((input1 === input2) && (input1 === input3))
        {
            return 'Equilateral Triangle';
        }

        else if (input1 === input2)
        {
            return 'Isoceles Triangle';
        }
        else if (input2 === input3)
        {
            return 'Isoceles Triangle';
        }
        else
        {
            return 'Scalene Triangle';
        }
    }
};

$(document).ready(function() {
    $('form#triangleInput').submit(function(event) {
        var input1 = $('input#side1').val();
        var input2 = $('input#side2').val();
        var input3 = $('input#side3').val();
        var result = triangleCheck(input1,input2,input3);
        $('#output').append('<li>' + result + '</li>');
        $('#givenInput').append('<li>' + input1 + ' : ' + input2 + ' : ' + input3 + '</li>');

        event.preventDefault();
    });
});
