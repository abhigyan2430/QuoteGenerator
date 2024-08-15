// Function to call the Type.fit Quotes API and generate a quote
async function generateQuote() {
    try {
        // Fetch data from the Type.fit Quotes API
        const response = await fetch('https://type.fit/api/quotes');

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Select a random quote from the array
        const randomQuote = data[Math.floor(Math.random() * data.length)];

        // Display the quote on the page
        if (randomQuote && randomQuote.text) {
            document.getElementById('quoteText').textContent = `"${randomQuote.text}" - ${randomQuote.author || 'Unknown'}`;
        } else {
            throw new Error('Unexpected API response format');
        }
    } catch (error) {
        // Handle errors and display a message
        console.error('Error generating quote:', error);
        document.getElementById('quoteText').textContent = `Failed to generate quote. Error: ${error.message}`;
    }
}

// Add event listener to the button
document.getElementById('generateBtn').addEventListener('click', generateQuote);
