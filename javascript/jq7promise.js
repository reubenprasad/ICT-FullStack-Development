var mypromise = new Promise((resolve , reject)=>{
    var myGrade = "A";
    if(myGrade == "A+")
    {
        resolve();
    }
    else
    {
        reject();
    }
});
mypromise.then(()=>{
    console.log('promise resolved');
}).catch(()=>{
    console.log('promise rejected');
});