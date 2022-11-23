let arr = ['Vlad','Max','Kolya','Ilya']

arr.forEach(function(item,index,array){
    console.log(`name: ${item}, number: ${index}, list: ${array}`)
})

arr.forEach((el)=>{
    console.log(`name: ${el}`)
})