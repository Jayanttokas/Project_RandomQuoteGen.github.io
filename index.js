const controller = (() => {

    //GENERATING NEW QUOTES
    const generateNewQuote = () => {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(result => {
          return result.json();
        })
        .then(data => {
          let quote = data[0].quote;
          displayQuote(quote);
        })
        .catch(error => {
          console.log(error);
        });
    };

    //DISPLAYING QUOTES
    const displayQuote = (data) => {
      document.getElementById("quotes").innerHTML = data;
    };

    //HANDLING EVENTS
    const eventHandler = () => {
        document.getElementById("new-quote").addEventListener('click', generateNewQuote);
    };

    return {
      //INITIALIZATION FUNCTION
      init: () => {
        console.log("App started");
        eventHandler();
      }

    };

})();

controller.init();
