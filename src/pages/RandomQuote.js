import React, { useEffect, useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
    };
    fetchQuote();
  }, []);

  return (
    <div>
      {quote && (
        <div>
          <p>{quote.content}</p>
          <h1>{quote.author}</h1>
        </div>
      )}
    </div>
  );
};

export default RandomQuote;
