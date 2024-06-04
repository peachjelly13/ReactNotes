import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
function App(){
  let items = ['New York','New Delhi','Tokyo','japan']
  const handleSelectItem = (item:String)=>{
    console.log(item);
  }
  return(
    <>
    <h1><ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/></h1>
    <h2><Alert text="Hello World"/></h2>
    </>
  )
  
 }
export default App;

//functional components