import Header from "./components/Header";

function App() {
  const title = "Task Tracker";
  return (
    <div className="container">
      <Header title={title} />
    </div>
  );
}

export default App;
