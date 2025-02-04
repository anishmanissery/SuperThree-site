// Include Sponsors List
fetch('/includes/sponsorslist.html?v=1.1')
  .then(response => response.text())
  .then(data => {    
    document.getElementById('sponsorsListContainer').innerHTML = data;
  })
  .catch(error => console.error('Error loading sponsors list:', error));


// Include Footer
fetch('/includes/footer.html?v=1.1')
  .then(response => response.text())
  .then(data => {    
    document.getElementById('footerContainer').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));