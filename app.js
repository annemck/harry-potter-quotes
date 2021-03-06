document.addEventListener('DOMContentLoaded', () => {
  
  
  
  // Re-usable querySelectors
  const form = document.querySelector('form');
  const quoteList = document.querySelector('.quote-list');
  
  
  // Extension: creation of delete one list item button
  // can't get to append to each li element
  const individualDelete = document.createElement('button');
  individualDelete.textContent = 'Delete This Quote';
  individualDelete.type = 'button';
  
  
  // Function to add item to the list
  const addListItem = function(quote, character, book, highlight){
    const newItem = document.createElement('li');
    
    const text = `${quote} <br> &nbsp;&nbsp;&nbsp;&nbsp;
    ${character}, &nbsp;<i>${book}</i>`;
    
    if (highlight) {
      newItem.innerHTML = `<b>${text}</b>`;
      // newItem.appendChild(individualDelete);
      newItem.setAttribute('id', 'boldQuote');
    }
    else {
      newItem.innerHTML = text;
      // newItem.appendChild(individualDelete);
      newItem.setAttribute('id', 'normalQuote');
    };
    
    
    quoteList.appendChild(newItem);
  };
  
  
  // Event Listener for form submittion
  form.addEventListener('submit', (event) => {
    
    event.preventDefault();
    
    const quote = event.target.quote.value;
    const character = event.target.character.value;
    const book = event.target.book.value;
    const highlight = event.target.highlight.checked;
    
    addListItem(quote, character, book, highlight);
    
    event.target.reset();
  });
  
  
  // Creation of delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete All Quotes';
  deleteButton.type = 'button';
  form.appendChild(deleteButton);
  
  
  // Delete button event listener
  deleteButton.addEventListener('click', (event) => {
    quoteList.textContent = "";
  });
  
  
  // Creation of selective delete button
  const selectiveDeleteButton = document.createElement('button');
  selectiveDeleteButton.textContent = 'Keep Only Highlighted Quotes';
  selectiveDeleteButton.type = 'button';
  form.appendChild(selectiveDeleteButton);
  
  
  // Selective delete button event listener
  selectiveDeleteButton.addEventListener('click', (event) => {
    const normalQuotes = document.querySelectorAll('#normalQuote');
    
    normalQuotes.forEach((quote) => {
      quoteList.removeChild(quote);
    });
  });
  
  
  // Extension: Creation of checkbox
  const box = document.createElement('input');
  box.setAttribute('type', 'checkbox');
  box.setAttribute('value', 'highlight');
  box.setAttribute('name', 'highlight');
  box.setAttribute('id', 'highlight');


  // Extension: Creation of checkbox label
  const label = document.createElement('label');
  label.textContent = 'Highlight This Quote!';
  label.setAttribute('for', 'highlight');
  
  
  // Extension: Adding new label and checkbox
  form.appendChild(label);
  form.appendChild(box);
  
  
  
});
