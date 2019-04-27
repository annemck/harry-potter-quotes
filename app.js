document.addEventListener('DOMContentLoaded', () => {
  
  
  
  // Re-usable querySelectors
  const form = document.querySelector('form');
  const quoteList = document.querySelector('.quote-list');
  
  
  // Extension: Creation of radio button
  const radio = document.createElement('input');
  radio.setAttribute('type', 'radio');
  radio.setAttribute('value', 'highlight');
  radio.setAttribute('name', 'highlight');
  radio.setAttribute('id', 'highlight');


  // Extension: Creation of radio label
  const label = document.createElement('label');
  label.textContent = 'Highlight This Quote!';
  label.setAttribute('for', 'highlight');
  
  
  // Extension: Adding new label and radio button
  form.appendChild(label);
  form.appendChild(radio);
  
  
  // Function to add item to the list
  const addListItem = function(quote, character, book, highlight){
    const newItem = document.createElement('li');
    
    const text = `${quote} <br> &nbsp;&nbsp;&nbsp;
    ${character}, &nbsp;<i>${book}</i>`;
    
    if (highlight) {
      newItem.innerHTML = `<b>${text}</b>`;
    }
    else {
      newItem.innerHTML = text;
      newItem.setAttribute('id', 'normalQuote')
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
  
  
  // Creation of delete all but highlighted items button
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
  
  
  
});
