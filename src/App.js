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
  // const [newData, setNewData] = useState({});
  const [loading, setLoading] = useState(false);


  // useEffect(() => {
  //   callApi();
  // }, [data, newData]);

  // const callApi = async () => {
  //   console.log('dataa', data);
  //   await axios.get(data.url).then(res => {
  //     setNewData({ 'response': res.data.data });

  //     console.log('data boky', newData);
  //     setData(newData);
  //     console.log('data boky', data);

  //   }).catch(e => {
  //     console.log(e);
  //   });
  // }

  const getData = (dataForm) => {

    setData(dataForm);
    console.log('dataaddd', data);
    setLoading(true);
  }




  return (
    <>
      <div className="resty">Resty</div>
      <Header />
      <Form getData={getData} />
      {/* response={newData} */}
      {loading ? <Results data={data} /> : null}

    </>
  );
}

export default App;