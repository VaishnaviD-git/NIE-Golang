async function checkExamResuts() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const passed = Math.random() > 0.35;
            if(passed){
                resolve("Conratulations !");
            }
            else{
                reject("Better Luck Next Time");
            }
            } ,2000);
        })
    } 
    

    async function getExamResults(){
        try{
            const result = await checkExamResuts();
            console.log(result);
        }
        catch(error){
            console.log(error);
        }
    }