
// abstruction.js

const Books = function(getTitle, getAuthor) { 
    // Private variables / properties  
    let title = getTitle; 
    let author = getAuthor;
    
 // Public method 
    this.giveTitle = function() {
       return title;
    }
    
    // Private method
    const summary = function() {
       return `${title} written by ${author}.`
    }
    
 // Public method that has access to private method.
    this.giveSummary = function() {
       return summary()
    } 
 }

 const book1 = new Books('Hippie', 'Paulo Coelho');
 book1.giveTitle();
//  book1.summary();
 book1.giveSummary();