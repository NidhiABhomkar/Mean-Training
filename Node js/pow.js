var pow=(a,b)=>
{
	var result=1
	for(var i=1;i<=b;i++)
	{
		result *=a;
	}
	return result;
}
var result=pow(2.3)
	
	console.log("Result="+result);