

window.addEventListener('scroll',
    // debounce(function () { console.log(1) }, 1000)
    throttle(()=>console.log(1), 300)

)





function debounce(func, delay) {
    let timeoutId
    return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            func.apply(this, arguments);
        }, delay);
    };
}

function throttle(func,delay){
    let timeoutId
    return () => {
        if(!timeoutId)
       timeoutId = setTimeout(()=>{
            func.apply(this,arguments)
            timeoutId = null
        },delay)
    }
}





