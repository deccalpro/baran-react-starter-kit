


function App() {

  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      {process.env.NODE_ENV === 'production' && (
        <>
        <h1>Bu bir deneme mesajıdır</h1>
        </>
      )}
    </div>
  );
}
export default App;
