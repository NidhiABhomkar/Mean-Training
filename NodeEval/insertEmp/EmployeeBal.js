
function calculateNetPay(basicPay)
{
    if(basicPay<5000)
    {
        var netPay=basicPay+0.3*basicPay-1000;
        return netPay;
    }
   else if(basicPay>5000)
    {
        var netPay=basicPay+0.4*basicPay-1000;
        return netPay;
    }

}

module.exports.calculateNetPay=calculateNetPay;