import React from 'react'
import { useState } from 'react'
import "./spend_money.css"

function Spend_money() {

    const[total,setTotal]=useState(10000000000)
    const [items, setItems] = useState({
    burger: 0,
    drink: 0,
    movie: 0,
    Rarebook:0,
    dinner:0,
    game:0,
    echo:0,
    shoes:0,
    earpodes:0,
    playstation:0,
    drone:0,
    jetski:0,
    rolex:0,
    tesla:0,
    ferrari:0,
    familyhome:0,
    ball:0,
    f1:0,
    helicopter:0,
    mansion:0,
    ship:0,
    island:0,
    house:0,

  });

  // Prices for each item
  const prices = {
    burger: 200,
    drink: 300,
    movie: 400,
    Rarebook:1000,
    dinner:2000,
    game:3000,
    echo:5000,
    shoes:10000,
    earpodes:20000,
    playstation:45000,
    drone:1000000,
    jetski:1500000,
    rolex:2000000,
    tesla:25000000,
    ferrari:1000000000,
    familyhome:2000000000,
    ball:45515151,
    f1:800000000,
    helicopter:550000000,
    mansion:12345000,
    ship:70000000,
    island:9999999999,
    house:55500000,
  };

  // ✅ Generic Buy Handler
  const handleBuy = (item) => {
    if (total >= prices[item]) {
      setItems({ ...items, [item]: items[item] + 1 });
      setTotal(total - prices[item]);
    }
  };

  // ✅ Generic Sell Handler
  const handleSell = (item) => {
    if (items[item] > 0) {
      setItems({ ...items, [item]: items[item] - 1 });
      setTotal(total + prices[item]);
    }
  };
  return (
    <>
        <div className='first'>
            <img src="./pic.jpg" alt="rrr" className='profile-img'/><br />
            <h1>Spends Prathap Money</h1>
        </div>
        <div className='total_amount'>
            <h1>₹{total}</h1>
        </div>
        <div className='main'>
            <div className='items'>
            <div className='burger'>
                <img src="./burger.jpg" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>200</span>
                <span>Burger</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("burger")}>Sell</p>
                <span>{items.burger}</span>
                <p onClick={() => handleBuy("burger")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./src/components/drink.webp" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>300</span>
                <span>drinks</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("drink")}>Sell</p>
                <span>{items.drink}</span>
                <p onClick={() => handleBuy("drink")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./movie_tickets.avif" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>400</span>
                <span>Movie Tickets</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("movie")}>Sell</p>
                <span>{items.movie}</span>
                <p onClick={() => handleBuy("movie")} >Buy</p>
            </div>
            </div>
            <div className='items'>
            <div className='burger'>
                <img src="./harry-DYODidp7.jpg" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>1000</span>
                <span>Rare book</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("Rarebook")}>Sell</p>
                <span>{items.Rarebook}</span>
                <p onClick={() => handleBuy("Rarebook")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./food-BAXdoEel.jpg" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>2000</span>
                <span>Dinner</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("dinner")}>Sell</p>
                <span>{items.dinner}</span>
                <p onClick={() => handleBuy("dinner")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./game-17mIpUP5.avif" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>3000</span>
                <span>Game</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("game")}>Sell</p>
                <span>{items.game}</span>
                <p onClick={() => handleBuy("game")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./echo-NEO3grUL.webp" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>5000</span>
                <span>Amazon Echo</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("echo")}>Sell</p>
                <span>{items.echo}</span>
                <p onClick={() => handleBuy("echo")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./shoe-ofruA9ww.png" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>10000</span>
                <span>Shoes</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("shoes")}>Sell</p>
                <span>{items.shoes}</span>
                <p onClick={() => handleBuy("shoes")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./earpods-b0D8ysi-.webp" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>20000</span>
                <span>Earpodes</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("earpodes")}>Sell</p>
                <span>{items.earpodes}</span>
                <p onClick={() => handleBuy("earpodes")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./ps-BgWKej93.webp" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>45000</span>
                <span>playstation</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("playstation")}>Sell</p>
                <span>{items.playstation}</span>
                <p onClick={() => handleBuy("playstation")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./drone-CZO9Vp-B.webp" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>1000000</span>
                <span>drone</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("drone")}>Sell</p>
                <span>{items.drone}</span>
                <p onClick={() => handleBuy("drone")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./jetski-CDjr05U6.webp" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>150000</span>
                <span>jetski</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("jetski")}>Sell</p>
                <span>{items.jetski}</span>
                <p onClick={() => handleBuy("jetski")}>Buy</p>
            </div>
            </div>


            <div className='items'>
            <div className='burger'>
                <img src="./rolex-Dk0gW-sl.webp" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>2000000</span>
                <span>rolex</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("rolex")}>Sell</p>
                <span>{items.rolex}</span>
                <p onClick={() => handleBuy("rolex")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./tesla-BBXojaXz.webp" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>25000000</span>
                <span>tesla</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("tesla")}>Sell</p>
                <span>{items.tesla}</span>
                <p onClick={() => handleBuy("tesla")}>Buy</p>
            </div>
            </div>


            <div className='items'>
            <div className='burger'>
                <img src="./ferrari-BBXjCzwA.webp" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>1000000000</span>
                <span>ferrari</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("ferrari")}>Sell</p>
                <span>{items.ferrari}</span>
                <p onClick={() => handleBuy("ferrari")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./house-ZV0Qfy3m.webp" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>200000000</span>
                <span>familyhome</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("familyhome")}>Sell</p>
                <span>{items.familyhome}</span>
                <p onClick={() => handleBuy("familyhome")}>Buy</p>
            </div>
            </div>


            <div className='items'>
            <div className='burger'>
                <img src="./helicopter-BbYO2gL0.jpg" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>55000000</span>
                <span>helicopter</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("helicopter")}>Sell</p>
                <span>{items.helicopter}</span>
                <p onClick={() => handleBuy("helicopter")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./cruise-Bik4yObg.jpg" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>70000000</span>
                <span>ship</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("ship")}>Sell</p>
                <span>{items.ship}</span>
                <p onClick={() => handleBuy("ship")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src=".\makeamovie-B57QZpbA.avif" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>500000000</span>
                <span>movie</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("movie")}>Sell</p>
                <span>{items.movie}</span>
                <p onClick={() => handleBuy("movie")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./NBA-B3-fjXGO.webp" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>45515151</span>
                <span>ball</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("ball")}>Sell</p>
                <span>{items.ball}</span>
                <p onClick={() => handleBuy("ball")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./mansion-ClmI5tiy.jpg" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>12345000</span>
                <span>mansion</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("mansion")}>Sell</p>
                <span>{items.mansion}</span>
                <p onClick={() => handleBuy("mansion")}>Buy</p>
            </div>
            </div>


            <div className='items'>
            <div className='burger'>
                <img src="./furustic-50c-NwdR.jpg" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>55500000</span>
                <span>house</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("house")}>Sell</p>
                <span>{items.house}</span>
                <p onClick={() => handleBuy("house")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./f1car-DrjLk-JG.jpg" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>80000000</span>
                <span>f1</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("f1")}>Sell</p>
                <span>{items.f1}</span>
                <p onClick={() => handleBuy("f1")}>Buy</p>
            </div>
            </div>

            <div className='items'>
            <div className='burger'>
                <img src="./private-CqD4aDP0.jpg" alt="rrr" className='collection'/>
            </div>
            <div className='item_amount'>
                <span>9999999999</span>
                <span>island</span>
            </div>
            <div className='user_choice'>
                <p onClick={() => handleSell("island")}>Sell</p>
                <span>{items.island}</span>
                <p onClick={() => handleBuy("island")}>Buy</p>
            </div>
            </div>
        </div>

        <div className='footer'>
            <h1>Designed by Prathap Yadav</h1>

        </div>
    </>
  )
}

export default Spend_money
