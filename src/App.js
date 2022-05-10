import "./App.sass"
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import { useState, useReducer } from "react";
import { trackHistoryReducer, addApiToHistory } from './components/Reducer'

const initalState = {
  historyApi: []
};

function App() {

  const [data, setData] = useState({
    'url': '',
    'methods': 'get',
    'body': ''
  });
  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(trackHistoryReducer, initalState);

  const getData = (dataForm) => {
    console.log('dataForm', dataForm);
    dispatch(addApiToHistory(dataForm));
    setData(dataForm);
    console.log('dataaddd', data);
    setLoading(true);
  }


  // const dispatchMethod = (param) => {
  //   console.log('obieda ', param);
  //   dispatch(addApiToHistory(param));
  // }



  return (
    <>
      {
        console.log('state.historyApi', state.historyApi)
      }
      <div className="resty">Resty</div>
      <Header />
      <Form getData={getData} />
      {loading ? <Results data={data} state={state} /> : null}

    </>
  );
}

export default App;