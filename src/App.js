import "./App.css";
import "./logBook.css";
import LogBook from "./logBook";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Log-Book-Bounds">
        <LogBook />
      </div>
    </div>
  );
}

export default App;
