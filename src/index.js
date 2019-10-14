import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./component/header";
import Main from "./component/main";
import "./styles.css";

const init_state = {
  symptoms: [],
  disease: null
};
const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "Add":
      return { symptoms: [...state.symptoms, action.payload], disease: null };
    case "remove":
      const index = state.symptoms.indexOf(action.payload);
      state.symptoms.splice(index, 1);
      return { symptoms: [...state.symptoms], disease: null };
    case "add_disease":
      return {
        symptoms: [...state.symptoms],
        disease: action.payload
      };

    default:
      return state;
  }
};
const store = createStore(reducer);
//store.dispatch({ type: "hello" });
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
