import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// https://api.coinpaprika.com/v1/tickers - coin API
//`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year` -영화 API
