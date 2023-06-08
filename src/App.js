import Main from "./comp/Main";
import Navbar from "./comp/Navbar";
import ImageGrid from "./comp/ImageGrid";

function App() {
  return (
    <div className="max-w-4xl m-auto bg-slate-100 h-screen">
      <Navbar />
      <Main />
      <ImageGrid />
    </div>
  );
}

export default App;
