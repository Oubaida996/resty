import "./App.css"
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";


function App() {
  let data = {};
  let show = false;
  const getUrl = (event) => {
    event.preventDefault();
    data['url'] = event.target.url.value; //url the name of input inside form
    data['method'] = event.target.methods.value;//methods the name of select 
    data['body'] = event.target.body.value;
    console.log('data.url', data.url);
    console.log('data.url', data.method);
    console.log('data.url', data.body);
    event.target.url.value = '';
    show = true;
  }
  return (
    <>
      <div className="resty">Resty</div>
      <Header />
      <Form getUrl={getUrl} />
      {show ? <Results data={data} /> : null}

    </>
  );
}

export default App;