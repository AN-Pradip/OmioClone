import SearchDeparture from "../../components/SearchDeparture/SearchDeparture";
import SearchDestination from "../../components/SearchDestination/SearchDestination";
import { DepartureContextProvider } from "../../context/DepartureContext";

function SearchForm() {
  
    return (
        <DepartureContextProvider>
            <div className="SearchForm">
                <SearchDeparture />
                <SearchDestination />
            </div>
        </DepartureContextProvider>
    );
  }
  
  export default SearchForm;