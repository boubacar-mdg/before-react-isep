const movie = {
    id: 1,
    title: 'Outer Banks', 
    author: '...',
}

const { author, title: movieTitle} = movie;
console.log(author, movieTitle);
console.log("The movie "+movieTitle+" has been produced by "+author);
console.log(`The movie ${movieTitle} has been produced by ${author}`);



const book = {
    id: 1,
    title: 'Une si longue lettre', 
    author: 'Mariama BA'
}

console.log(book.title)

const {title} = book;

console.log(title)
