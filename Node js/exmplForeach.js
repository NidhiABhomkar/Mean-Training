var sum=0;
var avg=0;
var i;
function add(value,index)
{
    sum+=value;
    console.log("value:"+value);

}
function average(value,index)
{
    var avg = (a[i] / a.length) * a.length
console.log("average:"+avg);
}
var a=[10,20,30];

a.forEach(add);
a.forEach(average);
console.log(sum);
console.log(avg);