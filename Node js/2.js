var f1=function factorial(n)
{
	var fact=1;
	for(var i=1;i<=n;i++)
	{
		fact*=i;
	}
	return fact;
}
 

var result=f1(5);



console.log("f1="+result);

