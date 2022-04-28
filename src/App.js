import "./App.css"
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import { useState, useEffect } from "react";
const axios = require('axios');


function App() {
  const [data, setData] = useState({
    'url': '',
    'methods': 'get',
    'body': ''
  });
  const [loading, setLoading] = useState(false);



  const getData = (dataForm) => {
    console.log('dataForm', dataForm);
    setData(dataForm);
    console.log('dataaddd', data);
    setLoading(true);
  }




  return (
    <>
      <div className="resty">Resty</div>
      <Header />
      <Form getData={getData} />
      {loading ? <Results data={data} /> : null}

    </>
  );
}

export default App;