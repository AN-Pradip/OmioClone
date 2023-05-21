import {TripTypeContextProvider} from "./context/TripTypeContext"
import TopContainer from "./layout/TopContainer/TopContainer";
function App() {

  //prevent refresh & set searched pokemon name to lower case
  function handleSubmit(event: any){
    event.preventDefault();
  }

  return (
    <TripTypeContextProvider>
      <form onSubmit={handleSubmit} className="Navbar-Container">
 
      </form>
    </TripTypeContextProvider>
  );
}

export default App;
