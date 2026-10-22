// PA1301 

self.onmessage = function(event){
    const limit = event.data
    let total = 0
    for (let i = 1; i < limit; i++) {
       total+= i

       if(i %1000000 === 0){
        const percentage = Math.round((i/limit)*100);

        self.postMessage({
            type:"progress",
            result:percentage
        });
       }
    } 
    self.postMessage({
        type:"result",
        result:total
    })
}
