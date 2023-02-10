import React from "react";
import Cards from "./components/Cards";
import data from "./data"

function App() {
  return (
    <>
      <h1>My top Netflix Series</h1>
      <div className="container">
        {
          data.map(item => <Cards sname={item.sname} imgsrc={item.imgsrc} title={item.title} links={item.links} />)
        }
        {/* <Cards sname={data[0].sname} imgsrc={data[0].imgsrc} /> */}
      </div>
      <footer><p>&copy; Suyash k favs</p></footer>
    </>
  )
}

export default App;
