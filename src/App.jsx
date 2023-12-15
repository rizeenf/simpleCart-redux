import { Provider } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import Product from "./Components/Product";
import { store } from "./utils/store";

function App() {
  return (
    <div className=" overflow-x-auto relative p-2 h-[100dvh] w-[100dvw] max-h-[100dvh] max-w-[100dvw] ">
      <Provider store={store}>
        <Header />
        <Product />
      </Provider>
    </div>
  );
}

export default App;
