// Select the UI elements from the DOM
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');
const resultsContainer = document.querySelector('#resultsContainer');
const exactMatchCheck = document.querySelector('#exactMatchCheck');

// REQUIREMENT: All event handlers should be added dynamically
searchBtn.addEventListener('click', performSearch);

// Optional: Allow pressing "Enter" in the input field to trigger the search
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const query = searchInput.value.trim();
    if (!query) return; // Prevent empty searches

    // Show a loading message while waiting for the live server
    resultsContainer.innerHTML = '<p class="loading">Fetching live deals...</p>';

    // 1. Request data (Ajax call) from selected API
    // We use encodeURIComponent to safely format game titles with spaces (e.g. "Grand Theft Auto")
    const apiUrl = `https://www.cheapshark.com/api/1.0/deals?title=${encodeURIComponent(query)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => {
            // 2. Default to showing all data
            let finalData = data; 

            // 3. If the checkbox is checked, overwrite finalData with the filtered version
            if (exactMatchCheck.checked) {
                finalData = data.filter(deal => 
                    deal.title.toLowerCase() === query.toLowerCase()
                );
            }

            // 4. Display whatever is in finalData
            displayResults(finalData); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultsContainer.innerHTML = '<p class="error">Failed to retrieve data. Please try again later.</p>';
        });
}

// 3. Display the selected data and make it look nice on the browser
function displayResults(deals) {
    // Clear the loading text
    resultsContainer.innerHTML = '';

    // Handle the case where the API returns an empty array
    if (deals.length === 0) {
        resultsContainer.innerHTML = '<p>No deals found for that game. Try another title!</p>';
        return;
    }

    // Loop through the saved data and dynamically build the HTML for each deal
    deals.forEach(deal => {
        // Create the main card container
        const card = document.createElement('div');
        card.className = 'deal-card';

        // Select specific data points: thumb, title, salePrice, normalPrice, savings, and dealID
        // We use CheapShark's redirect link to properly send the user to the store
        card.innerHTML = `
            <img src="${deal.thumb}" alt="${deal.title} cover image" class="deal-image">
            <div class="deal-content">
                <h3>${deal.title}</h3>
                <div class="prices">
                    <span class="sale-price">$${deal.salePrice}</span>
                    <span class="normal-price">$${deal.normalPrice}</span>
                </div>
                <p class="savings">You save: ${Math.round(deal.savings)}%</p>
                <a href="https://www.cheapshark.com/redirect?dealID=${deal.dealID}" target="_blank" class="buy-btn">View Deal</a>
            </div>
        `;

        // Append the newly created element to the container
        resultsContainer.appendChild(card);
    });
}

