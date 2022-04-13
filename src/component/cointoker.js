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
//   };
//   return (
//     <div>
//       <h2>코인시세현황</h2>
//       {loading ? <h3>Lodding...</h3> : null}
//       <input type="text" value={mymoney} onChange={onChange} />
//       <ul>
//         {coins.map((current, index) => (
//           <li key={index}>
//             {current.name}의 현재 가격은
//             {Math.round((current.quotes.USD.price * 100) / 100)}$이다
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// // https://api.coinpaprika.com/v1/tickers
// //
