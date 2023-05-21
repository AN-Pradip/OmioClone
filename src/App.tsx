function App() {

  //prevent refresh & set searched pokemon name to lower case
  function handleSubmit(event: any){
    event.preventDefault();
  }

  return (
      <form onSubmit={handleSubmit} className="Navbar-Container">
 
      </form>
  );
}

export default App;
