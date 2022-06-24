
const Book = function(t, a) {
    let title = t; 
    let author = a; 
    

    // public method
    return {
       summary : function() { 
         console.log(`${title} written by ${author}.`);
       } 
    }

    // private method
    const all = function(){
        console.log(`${title} written by ${author}.`);
    }
 }

 const book1 = new Book('Hippie', 'Paulo Coelho');
 book1.summary();

// book1.all();