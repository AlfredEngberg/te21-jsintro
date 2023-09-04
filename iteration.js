for (let i = 0; i < 10; i++) {
 //   console.log(i)
}



let names = ['Alma', 'Agnes', 'Amanda', 'Alva']

for (let index = 0; index < names.length; index++) {
  // const element = names[index];
  //  console.log(element)
  //  console.log(names[index])
}

names.forEach(name => {
  // console.log(name)
});




let rolls = []

for (let i = 0; i < 10; i++) {
    const roll = Math.ceil(Math.random() * 6) 
       // console.log(roll)
        rolls.push(roll)
        console.log(rolls[i])
}
