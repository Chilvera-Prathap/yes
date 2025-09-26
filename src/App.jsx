import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Greetings from "./components/Greetings";
import Greet from "./components/greet";
import QuoteGenerator from "./components/quotes";
import Toggle_theme from "./components/toggle_theme";
import Calc from './components/calc.jsx'
import HiddenSearchBar from "./components/hiddenSearchBar.jsx";
import Login_validation from "./components/login_validation.jsx";
import spend_money from "./components/spend_money.jsx";
import Spend_money from "./components/spend_money.jsx";
import Madam from "./Yes_Madam/madam.jsx";


function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [buttonColor, setButtonColor] = useState("white");


  const [showCalc, setShowCalc] = useState(false);

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "black" : "white");
    setTextColor(textColor === "black" ? "#ffa31a" : "black");
    setButtonColor(backgroundColor === "white" ? "black" : "white");
  };
  return (

    <div>
      {/* <button onClick={handleClick} style={{buttonColor,color: textColor,border: `2px solid ${textColor}`,}}>
        {backgroundColor === "black" ? "blacktheme" : "whitetheme"}
      </button>
      <button className="calc" onClick={() => setShowCalc(true)} style={{buttonColor,color: textColor,border: `2px solid ${textColor}`,}}>Click Me</button>


      {showCalc && (
        
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
            
          }}
        >
            {/* <Calc /> */}
  
            {/* <button onClick={() => setShowCalc(false)}>X</button>

           

        </div> */}
      {/* )}  */}
      
       {/* <Toggle_theme
        name={"Prathap"}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />

      <Toggle_theme
        name={"Chintu"}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />

      <Toggle_theme
        name={"Rajesh"}
        backgroundColor={backgroundColor}
        textColor={textColor}
      /> */}

      {/* <Login_validation /> */}

      {/* <Spend_money /> */}

      <Madam />
    </div>
    
  );
}

export default App;
