// UI elementit
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');
const resultsContainer = document.querySelector('#resultsContainer');
const exactMatchCheck = document.querySelector('#exactMatchCheck');

// Lisätään tapahtumankuuntelija hakupainikkeelle
searchBtn.addEventListener('click', performSearch);

// Parempaa käytettävyyttä varten, sallitaan myös Enter-näppäimen käyttö hakemiseen
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const query = searchInput.value.trim();
    if (!query) return; // Estää tyhjän haun

    // Näyttää lataustekstin, kunnes serveriltä saadaan vastaus
    resultsContainer.innerHTML = '<p class="loading">Fetching live deals...</p>';

    // 1. hae data CheapShark API:sta käyttäen fetch-funktiota
    // encodeURIComponent varmistaa, että haun sisältämät erikoismerkit ovat oikein muotoiltuja URL:ssä
    const apiUrl = `https://www.cheapshark.com/api/1.0/deals?title=${encodeURIComponent(query)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => {
            // 2. Tallenna alkuperäinen data muuttujaan finalData
            let finalData = data; 

            // 3. Jos "Exact Match" -valintaruutu on valittuna, suodatetaan data niin, että vain tarkat yhteensopivat tulokset säilyvät
            if (exactMatchCheck.checked) {
                finalData = data.filter(deal => 
                    deal.title.toLowerCase() === query.toLowerCase()
                );
            }

            // 4. Näytetään suodatettu data selaimessa
            displayResults(finalData); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultsContainer.innerHTML = '<p class="error">Failed to retrieve data. Please try again later.</p>';
        });
}

// 3. Näytetään suodatettu data selaimessa
function displayResults(deals) {
    // Poistetaan aiemmat tulokset ennen uusien näyttämistä
    resultsContainer.innerHTML = '';

    // Jos ei löydy yhtään tarjousta, näytetään käyttäjälle viesti
    if (deals.length === 0) {
        resultsContainer.innerHTML = '<p>No deals found for that game. Try another title!</p>';
        return;
    }

    // Luodaan kortti jokaiselle löydetylle tarjoukselle
    deals.forEach(deal => {
        // Luodaan uusi div-elementti tarjouksen kortille
        const card = document.createElement('div');
        card.className = 'deal-card';

        // Valitaan tarjouksen tiedot ja lisätään ne korttiin
        // Käytetään template literal -syntaksia, jotta voimme helposti lisätä muuttujien arvot HTML:ään
        // cheapsharkin API tarjoaa dealID:n, jota käytetään linkin muodostamiseen, jotta käyttäjä voi siirtyä suoraan tarjouksen sivulle
        card.innerHTML = `
            <img src="${deal.thumb}" alt="${deal.title} cover image" class="deal-image">
            <div class="deal-content">
                <h3>${deal.title}</h3>
                <div class="prices">
                    <span class="sale-price">$${deal.salePrice}</span>
                    <span class="normal-price">$${deal.normalPrice}</span>
                </div>
                <p class="savings">You save: ${Math.round(deal.savings)}%!!!</p>
                <a href="https://www.cheapshark.com/redirect?dealID=${deal.dealID}" target="_blank" class="buy-btn">View Deal</a>
            </div>
        `;

        // Lisää valmiin kortin sivulle näkyviin tulosalueen sisään
        resultsContainer.appendChild(card);
    });
}

