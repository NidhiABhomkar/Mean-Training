var simpleInterest=(p,t,r=2)=>
{
	var  result=(p*t*r)/100;
	return result;
}
console.log(simpleInterest(5000,3));
console.log(simpleInterest(5000,3,4));