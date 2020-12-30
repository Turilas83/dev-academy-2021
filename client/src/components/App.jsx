import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import ListNamesAlphabetical from "./ListNamesAlphabetical";
import Header from "./Header";
import Count from "./Count";
import Footer from "./Footer";

// function createNameItem(name) {
//   return <Names name={name.names.name} />
// }
// {namelist.map(createNameItem)}
// <Search />
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
        <ListNamesAlphabetical sort={alpha} />
        <ListNamesAlphabetical sort={top} />
      </div>
      <Footer />
    </div>
  )
}

export default App;