class CheckPos
{
    constructor(name, count, cost)
    {
        this.name = name;
        this.count = count;
        this.cost = cost;
    }
}
let check =
    [
    new CheckPos("butter", 2, 2.45),
    new CheckPos("milk", 1, 5)
];
function showCheck(check)
{
    let resString = "";
    for (let i = 0; i < check.length; i++)
    {
        resString += `${check[i].name} ${check[i].count * check[i].cost}\n`;
    }
    alert(resString);
}
function allSum(check)
{
    let sum=0
    for (let i = 0; i < check.length; i++)
    {
        sum+=check[i].cost*check[i].count
    }
    alert(`Sum = ${sum}`)
}
function mostExpensive(check)
{
    let most = check[0].cost
    let id = 0
    for (let i = 0; i < check.length; i++)
    {
        if(check[i].cost>most)
        {
            most=check[i].cost
            id = i
        }
    }
    alert(`Most expensive product is ${check[id].name} ${check[id].count * check[id].cost}\n`)
}
function middle(check)
{
    let allCount=0
    let allCost=0
    for (let i = 0; i < check.length; i++)
    {
        allCost+=check[i].cost
        allCount+=check[i].count
    }
    alert(`Middle cost is ${allCost/allCount}`)
}
showCheck(check);
allSum(check)
mostExpensive(check)
middle(check)