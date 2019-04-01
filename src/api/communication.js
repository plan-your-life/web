//function to communicate with the main process
export default async function communicate(listener, items){
    //Look get the message
    let prom = new Promise((resolve,reject) => {
        if(listener === "getToken"){
            if(!localStorage.access_token || !localStorage.refresh_token){
                resolve(false);
            }
            else{
                resolve(localStorage);
            }
        }
        else{
            localStorage.access_token = items.access_token;
            localStorage.refresh_token= items.refresh_token;
            resolve(true);
        }
    });
    return await prom;
}