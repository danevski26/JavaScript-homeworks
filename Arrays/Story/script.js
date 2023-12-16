let array = [name = prompt('Enter the name of the main character of the story please:'), mood = prompt('Enter the mood of our main character:'), activity = prompt ('Enter the favorite activity of our character:')]

function tellStory(array1){
    for (let i = 0; i < array.length; i++) {
       console.log ( `This is ${array1[i]}.${array1[i]} is a nice person. Today they are ${array1[i]}. They are ${array1[i]} all day. The end.`)
        
    }
    
}

tellStory(array)