function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

const container = document.querySelector('.book-card-container')
const addBook = document.getElementById('#submit-btn')

let myLibrary = [{
    title: 'number of one two three one two',
    author: 'bob',
    pages: '1200',
    read: true
}, {
    title: 'book2',
    author: 'bobs',
    pages: '100',
    read: false
}, {
    title: 'book3',
    author: 'bobs',
    pages: '100',
    read: false
}, {
    title: 'book4',
    author: 'bobs',
    pages: '100',
    read: true
}];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    showBooksInLibrary();
}

function showBooksInLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        container.appendChild(card)
        const bookTitle = document.createElement('p');
        bookTitle.textContent = `"${myLibrary[i].title}"`;
        card.appendChild(bookTitle);
        // BOOK AUTHOR
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `by: ${myLibrary[i].author}`;
        card.appendChild(bookAuthor);
        // BOOK PAGES
        const bookPages = document.createElement('p');
        bookPages.textContent = `${myLibrary[i].pages} pages`;
        card.appendChild(bookPages);
        // BOOK STATUS
        const bookIsRead = document.createElement('p');
        bookIsRead.textContent = `${myLibrary[i].read}`
        if (myLibrary[i].read) {
            const readButton = document.createElement('button')
            readButton.classList.toggle('isRead-button')
            readButton.textContent = `read`
            card.appendChild(readButton)
            readButton.addEventListener('click', () => {
                readButton.classList.toggle('isRead-button')
                readButton.classList.toggle('notRead-button')
                if (readButton.textContent == `read`) {
                    readButton.textContent = `unread`
                } else if(readButton.textContent = `unread`) {
                    readButton.textContent = `read`
                }})
        } else {
            const readButton = document.createElement('button')
            readButton.classList.toggle('notRead-button')
            readButton.textContent = `unread`
            card.appendChild(readButton)
            readButton.addEventListener('click', () => {
                readButton.classList.toggle('notRead-button')
                readButton.classList.toggle('isRead-button')
                if (readButton.textContent == `read`) {
                    readButton.textContent = `unread`
                } else if(readButton.textContent = `unread`) {
                    readButton.textContent = `read`
                }
            })
        };
        // REMOVE BUTTON    
        const removeButton = document.createElement('button')
        removeButton.classList.add('delete-button')
        removeButton.textContent = `delete`
        card.appendChild(removeButton)
        removeButton.addEventListener('click', () => {
            container.removeChild(card)
        })
    }
}



showBooksInLibrary()