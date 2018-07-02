function add(...numbers)
{

	var sum=0;
	for(var i=0;i<numbers.length;i++)
	{
		sum+=numbers[i];
	}
	return sum;
}

	console.log("add 10,20=> "+add(10,20));

	console.log("add 10,20,30,40 => "+add(10,20,30,40));
