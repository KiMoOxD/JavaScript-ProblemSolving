function checkCashRegister(price, cash, cid) {
  let change=cash-price,temp=0,tot=0;
  let obj = {status: "OPEN", change: []}
  let unit = {
    'PENNY':0.01,
    'NICKEL':0.05,
    'DIME':0.1,
    'QUARTER':0.25,
    'ONE':1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  }
cid.forEach((el,i,arr)=>{
  tot+=el[1]
  if (el[1]==change) {
    obj.status='CLOSED'
    obj.change.push(el);
    return obj;
  } 
})
if (tot < change) {
  return {status: "INSUFFICIENT_FUNDS", change: []}
} else if (tot == change) {
  return {status: "CLOSED", change: [...cid]}
} else {
  
  for (let i=cid.length-1;i>=0;i--) {
    let c = 0;
    if (unit[cid[i][0]] <= change) {
      for (;temp<change;) {
        console.log(cid[i],temp,c)
        if (cid[i][1]==0 || temp+unit[cid[i][0]] > change) {break;}
        temp+=unit[cid[i][0]]
        cid[i][1]-=unit[cid[i][0]]
        c++
      } 
      
      let arr = [cid[i][0], c*unit[cid[i][0]]]
      obj.change.push(arr)
   }
  }  
}
if ((change-temp).toFixed(2) == unit[obj.change[obj.change.length-1][0]]) {
  
 temp+=unit[obj.change[obj.change.length-1][0]]
 obj.change[obj.change.length-1][1]+=unit[obj.change[obj.change.length-1][0]]
}

  console.log(temp,change)

if (temp.toFixed(2) == 0 || temp.toFixed(2)<change) {
  return  {status: "INSUFFICIENT_FUNDS", change: []}
}
obj.change=obj.change.filter(el => el[1]>0);
  return obj;
}

console.log(checkCashRegister(50.35, 200, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))