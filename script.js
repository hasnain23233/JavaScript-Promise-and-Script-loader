let promise = new Promise((resolve , reject)=>{
    console.log("Your Promise is panding")
    setTimeout(()=>{
        resolve(90)
    } , 2000)
})
let promise2 = new Promise((resolve , reject)=>{
    console.log("promise is padding")
    setTimeout(()=>{
        resolve("This is your seacond promise")
        // reject(new Error(4004))
    } , 3000)
})
let promise3 = new Promise((resolve , reject)=>{
    console.log("Your Reject is padding")
    setTimeout(()=>{
        resolve('Your Request is Accepted')
    },4000)
})
let promise4 = new Promise((promise , reject)=>{
    console.log('This is your fouth promise')
    setTimeout(() => {
        promise(100)
    }, 5000);
})
promise.then((value)=>{
    console.log(value)
})
promise2.then((value)=>{
    console.log(`Your Request is Accepted ${value}`)
}).catch((error)=>{
    console.log(`Your Request is Rejected ${error.message}`)
})
promise3.then((value)=>{
    console.log(value)
})
promise4.then((value)=>{
    console.log(`This is your fourth promise ${value} ruppes`)
})
console.log('Wellcome to Store')

let loadingScript = (url)=>{
    return new Promise((resolve , reject)=>{
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = url
        document.body.appendChild(script)
        script.onload = ()=>{
            resolve('Your script was loaded successfuly!!!!!!!!!!!!!!!')
        }
        script.onerror = ()=>{
            reject("Your script was not loaded some issue. Please wait!!!!!!!!!!!!!!!!!!!!!!!!")
        }
    })
}

let p1 = loadingScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js')
p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})
