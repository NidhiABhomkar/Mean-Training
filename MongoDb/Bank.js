db.getCollection('Bank').find({})
Test


---------
1.Choose appropriate primary key(s)
  	id is taken as primary key

db.Bank.insert({_id:1,
                bid:101,
                accno:2001,
                balance:33000,
                cust_details:{cid:201,cname:"Ram",street:"Ramapura",city:"Chennai",loan:200000,deposit:50000},
                branch_details:{bcity:"Chennai",bname:"Chennai",assets:2200000}
                })


db.Bank.insert({_id:2,
                bid:102,
                accno:2002,
                balance:23000,
                cust_details:{cid:202,cname:"Nidhi",street:"Shivajinagr",city:"Pune",loan:13000,deposit:0},
                branch_details:{bcity:"Chennai",bname:"Pune",assets:8200000}
                })



db.Bank.insert({_id:3,
                 bid:103,
                accno:2003
                balance:800,
                cust_details:{cid:203,cname:"Shiv",street:"Manapakkam",city:"Chennai",loan:120000,deposit:700},
                branch_details:{bcity:"Chennai",bname:"Chennai",assets:2000000}
                })

db.Bank.insert({_id:4,
                 bid:104,
                accno:2004,
                balance:600,
                cust_details:{cid:204,cname:"Riya",street:"12th cross",city:"Pune",loan:500000,deposit:6000},
                branch_details:{bcity:"Pune",bname:"Pune",assets:1200000}
                })

db.Bank.insert({_id:5,
                 bid:105,
                accno:2005,
                balance:23000,
                cust_details:{cid:205,cname:"Ramesh",street:"Ladyhill",city:"Mangalore",loan:0,deposit:60000},
                branch_details:{bcity:"Pune",bname:"Pune",assets:111000}
                })

db.Bank.insert({_id:6,
                 bid:106,
                accno:2006,
                balance:1650,
                cust_details:{cid:206,cname:"Sona",street:"Shivaji nagar",city:"Hyderabad",loan:250000,deposit:50000},
                branch_details:{bcity:"Hyderabad",bname:"Hyderabad",assets:200000}
                })

db.Bank.insert({_id:7,
                
                 bid:107,
                accno:2007,
                balance:500,
                cust_details:{cid:207,cname:"Harry",street:"gandhi nagar",city:"Chennai",loan:120000,deposit:6000},
                branch_details:{bcity:"Chennai",bname:"Chennai",assets:200000}
                })

db.Bank.insert({_id:8,
                 bid:108,
                accno:2008,
                balance:500,
                cust_details:{cid:208,cname:"Shweta",street:"Ramapura",city:"Chennai",loan:220000,deposit:60000},
                branch_details:{bcity:"Chennai",bname:"Chennai",assets:2900000}
                })




db.Bank.insert({_id:9,
                 bid:109,
                accno:2009,
                balance:3000,
                cust_details:{cid:209,cname:"Marry",street:"Ramapura",city:"Chennai",loan:220000,deposit:60000},
                branch_details:{bcity:"Hyderabad",bname:"Hyderabad",assets:200000}
                })

db.Bank.insert({_id:10,
                 bid:110,
                accno:889,
                balance:23000,
                cust_details:{cid:210,cname:"Sham",street:"12th cross",city:"Hyderabad",loan:220000,deposit:60000},
                branch_details:{bcity:"hyderabad",bname:"Hyderabad",assets:200000}
                }) 

 

  db.Bank.find()

----------------------------------------------------------------

db.Bank.find({}).count()
  o/p:10



2.Create index on primary key(s)
    db.Bank.ensureIndex({bid:101},{unique:true})


3.The names and cities of all borrowers. 	
    db.Bank.find({},{"cust_details.cname":1,"cust_details.city":1,_id:0})
    db.Bank.find({"cust_details.loan":{$gt:0}},{"cust_details.cname":1,"cust_details.city":1,_id:0})
    
    

4.The names of borrowers who live in Chennai. 
        db.Bank.find({"cust_details.city":"Chennai"},{"cust_details.cname":1,_id:0})



5.Find the name, city, and assets of the branch with the largest assets. 
     
       db.Bank.find({},{"branch_details.bcity":1,"branch_details.bname":1,"branch_details.assets":1}).sort({"branch_details.assets":-1}).limit(1)
        
    
     
 6.The names and cities of customers who have a loan at Pune branch.
       
       db.Bank.find({$and:[{"cust_details.loan":{$gt:0}},{"branch_details.bcity":"Pune"}]},{"cust_details.cname":1,"cust_details.city":1,_id:0})



7.Find the number of accounts with balances between 700 and 900. 
   
        db.Bank.aggregate([{$match:{balance:{$gt:700,$lt:900}}},{$count:"accno"}])


8.The names of customers with both deposits and loans at Pune branch.
        db.Bank.find({$and:[{"cust_details.loan":{$gt:0}},{"cust_details.deposit":{$gt:0}},{"branch_details.bcity":"Pune"}]},{"cust_details.cname":1})



9.The customers whose total loans are greater than the total amount in their bank accounts 
        db.Bank.find({$where:"this.cust_details.loan>this.balance"},{"cust_details.cname":1,"cust_details.loan":1,balance:1,})
        

        

10. The names of customers living on streets with names ending in "Hill".       
        db.Bank.find({"cust_details.street":/hill/},{"cust_details.cname":1,"cust_details.street":1})        
        

        
11. The names of customers with an account but not a loan at Pune branch. 
           db.Bank.find({$and:[{"cust_details.deposit":{$gt:0}},{"cust_details.loan":0},{"branch_details.bcity":"Pune"}]},{"cust_details.cname":1})
        
           
           
12. The names of branches whose assets are greater than the assets of all branches in Hyderabad. 
        
           
        
           

13. The branch with the largest average balance. 
          db.Bank.aggregate([{$group:{_id:"$branch_details.bcity",average_of_balance:{$avg:"$balance"}}},
       {$sort:{average_of_balance:-1}},{$limit:1}])
 
    
    
14. The branch name and number of customers for each branch
        db.Bank.aggregate([{$group:{_id:"$branch_details.bname",no_of_customers:{$sum:1}}}])



15. Deposit an additional Rs. 20,000 to Ram’s bank account. 
        db.Bank.update({"cust_details.cname":"Ram"},{$inc:{balance:20000}})
  or 
        db.Bank.update({"cust_details.cname":"Ram"},{$inc:{"cust_details.deposit":20000}})
        
        
































