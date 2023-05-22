import TopContainer from "./layout/TopContainer/TopContainer";
import {TripTypeContextProvider} from "./context/TripTypeContext"
import SearchForm from "./layout/SearchForm/SearchForm";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {

  //prevent refresh & set searched pokemon name to lower case
  function handleSubmit(event: any){
    event.preventDefault();
  }

  return (
    <TripTypeContextProvider>
      <LoadingScreen />
      <form onSubmit={handleSubmit} className="Navbar-Container">
        <TopContainer />
        <SearchForm />
        <div className="AccomodationContainer">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span className="accomodationLabel">
            Find my accomodation
          </span>
        </div>
      </form>
    </TripTypeContextProvider>
  );
}

export default App;
