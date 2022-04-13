// import "./App.css";
// import React, { useEffect, useState } from "react";

// function App() {
//   const [coins, setCoins] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [mymoney, setMymoney] = useState(0);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   const onChange = (e) => {
//     setMymoney(e.target.value);
//     console.log(coins[0]);
//   };
//   return (
//     <div>
//       <h2>코인시세현황</h2>
//       {loading ? <h3>Lodding...</h3> : null}
//       <input type="text" value={mymoney} onChange={onChange} />
//       <hr />
//       <select id="coin_chart">
//         {coins.map((current, index) => (
//           <option value="" key={index}>
//             {current.name} : {current.quotes.USD.price}
//           </option>
//         ))}
//       </select>
//       {coins.map((current) => (
//         <div>
//           {current.name}은 {mymoney / current.quotes.USD.price}개 구매
//           가능합니다.
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
// // https://api.coinpaprika.com/v1/tickers
