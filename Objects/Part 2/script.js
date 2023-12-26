let book = {
    title: '',
    author:'' ,
    readingStatus:false,
    input: function(title,author,readingStatus){
        this.title = prompt("Enter the title of the book.");
        this.author = prompt ('Enter the name of the author of this book.');
        this.readingStatus = false;
    },
    output: function(){
        let isRead = confirm ('Have you read this book?')
        if(isRead){
            alert (`You have already read "${this.title}" by ${this.author}`)
        }else{
            alert(`You still need to read ${this.title} by ${this.author}`)
        }
    }

};


book.input()
book.output()