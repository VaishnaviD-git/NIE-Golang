async function fetchBalance() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const balance = Math.random() > 0.3 ? 1000:0;
            if(balance > 0){
                resolve("Account Balance:" +balance);
            }
            else{
                reject("Insufficient Balance");
            }
            } ,2000);
        })
    } 
    

    const withdraw =async (amount)=>{
        try{
            console.log("Checking please wait....")
            const balance = await fetchBalance();
            console.log(balance);
    
        }
        catch(error){
            console.error(error);
        }
    }

    withdraw(500);