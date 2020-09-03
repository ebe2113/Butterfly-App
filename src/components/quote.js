import React from 'react'

    const Quote = ({ quote }) => {
      return (
        <div>
          {quote.map((quote) => (
            <div class="quote-of-day">
                <h2 class="qod">{quote.quote}</h2>
             </div>
          ))}
        </div>
      )
    };

    export default Quote
