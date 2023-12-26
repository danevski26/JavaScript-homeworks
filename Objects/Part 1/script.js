
// let pet = {

// name: document.getElementById ('name'),
// kind: document.getElementById ('kind'),
// speak: function (message){
//     console.log (`The ${this.kind} ${this.name} says: ${message}`)
//   }
// }
// let mess = document.getElementById ('speak');

//ovde srediv se za da bide so html inputs samo ne znam zosto ne mi gi zemase vrednostite od inputite i ne sakase da mi gi ispecati 

//isto taka ne znam zosto koga stavav eventlistener na buttonot ovde mi davase error

//ako moze pomos 

let pet = {

    name: prompt('Enter the name of the pet'),
    kind: prompt ('Enter the kind of the pet'),
    speak: function (message){
        console.log (`The ${this.kind} ${this.name} says: ${message}`)
      }
    }
    let mess = prompt ("What is it saying?")


    
    
   
