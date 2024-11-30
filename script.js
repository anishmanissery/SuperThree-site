// Include Top Navbar
fetch('/includes/navbar.html?v=1.1')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbarContainer').innerHTML = data;

    // Highlight the current page
    const path = window.location.pathname;
    const links = {
        '/howtouse/': 'howtouse-link',
        '/calculation/': 'calculation-link',
        '/analysis/': 'analysis-link',
        '/sponsor/': 'sponsor-link'
    };

    if (links[path]) {
        document.getElementById(links[path]).classList.add('active');
    }
  })
  .catch(error => console.error('Error loading navbar:', error));


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