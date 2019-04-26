document.addEventListener('DOMContentLoaded', () => {
  
  
  const form = document.querySelector('form');
  const quoteList = document.querySelector('.quote-list');
  
  
  // const addQuote = function(){
  //   const newItem = document.createElement('li');
  //   newItem.textContent = this;
  //   quoteList.appendChild(newItem);
  // };
  

  
  form.addEventListener('submit', (event) => {
    
    event.preventDefault();
    
    const quote = event.target.quote.value;
    const character = event.target.character.value;
    const book = event.target.book.value;
    
    const newQuote = document.createElement('li');
    newQuote.textContent = `${quote} by ${character} in ${book}`
    quoteList.appendChild(newQuote);
    
  });
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete All Quotes';
  deleteButton.type = 'button';
  form.appendChild(deleteButton);
  
  deleteButton.addEventListener('click', (event) => {
    quoteList.textContent = "";
  });
  
  
  
});
