import "./App.css";
import Book from "./components/Book";

function App() {
  let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: 4.5,
  };

  return <Book title={book.title} author={book.author}  rating={book.rating}/>;
}

export default App;
