
    // JavaScript for visitor counter. You are creating an element called 'counter' which will select an element called 'counter-number' in your HTML file
    //created a fnction called update counter which is doing a fetch request to my lambda function URL(like curling the URP) and then storing that as a variable called data. so whatever the response is( await response.json(), itll store it as a function called data). then it updates the counter-numberin my HTML website to say "Views: the data returned by my fetech request"
    const counter = document.querySelector(".counter-number");
    async function updateCounter() {
        try {
            let response = await fetch("https://qm3xp7vwohd3o7w5uqoaclebj40riddw.lambda-url.us-east-1.on.aws/");
            let data = await response.json();
            counter.innerHTML = `Views: ${data.views}`;
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    }
    updateCounter();

