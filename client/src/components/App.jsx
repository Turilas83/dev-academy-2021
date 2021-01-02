import React from "react";
import Search from "./Search";
import ListNames from "./ListNames";
import Header from "./Header";
import Count from "./Count";
import Footer from "./Footer";

const alpha = "alphabetical-order";
const top = "most-popular";

function App() {
  return(
    <div>
      <Header />
      <div className="middle">
        <Search />
        <Count />
      </div>
      <div className="tables">
        <ListNames sort={alpha} />
        <ListNames sort={top} />
      </div>
      <Footer />
    </div>
  )
}

export default App;