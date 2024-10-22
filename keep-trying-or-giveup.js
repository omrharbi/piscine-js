function retry(count, collback) {

    return new Promise((resolve) => {

        collback().then((data) => {resolve(data)}).catch((err)=>{
            throw new Error(err);    
        })
    })

}