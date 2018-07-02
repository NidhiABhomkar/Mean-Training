//Define Callback function.

function ShowResults(value)
{
    console.log("value:"+value);
}

//create an array.
var letters=['aa','bb','cc'];


//Call the ShowResults Callback function forEach
//array element
letters.forEach(ShowResults);