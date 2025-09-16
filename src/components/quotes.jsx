import React, { useState, useEffect } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");      // store quote text
  const [author, setAuthor] = useState("");    // store author

  // Function to fetch a random quote
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  // Run once when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ maxWidth: "600px", textAlign: "center" }}>
        "{quote}"
      </h2>
      <p style={{ fontStyle: "italic" }}>— {author}</p>
      <button 
        onClick={fetchQuote} 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          background: "#007bff",
          color: "white"
        }}
      >
        New Quote
      </button>
    </div>
  );
}

export default QuoteGenerator;
