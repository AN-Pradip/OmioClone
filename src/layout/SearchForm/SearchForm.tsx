import SearchDeparture from "../../components/SearchDeparture/SearchDeparture";
import { DepartureContextProvider } from "../../context/DepartureContext";

function SearchForm() {
  
    return (
        <DepartureContextProvider>
            <div className="SearchForm">
                <SearchDeparture />

            </div>
        </DepartureContextProvider>
    );
  }
  
  export default SearchForm;