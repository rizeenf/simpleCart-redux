import "./App.css";
import Header from "./Components/Header";
import Product from "./Components/Product";

function App() {
  return (
    <div className=" overflow-auto relative p-2 h-[100dvh] w-[100dvw] max-h-[100dvh] max-w-[100dvw] ">
      <Header />
      <Product />
    </div>
  );
}

export default App;
