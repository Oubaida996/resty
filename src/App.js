import "./App.css"
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);


  // useEffect(() => {
  //   getData(data);
  // });

  const getData = (data) => {



    setData(data);
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