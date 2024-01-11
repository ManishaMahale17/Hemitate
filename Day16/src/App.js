import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trainer from "./pages/Trainers/container/Trainer";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return(
  <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Trainer/>}/>   
        </Routes>
      </BrowserRouter>
    </div >
    </Provider>
  );
}

export default App;
