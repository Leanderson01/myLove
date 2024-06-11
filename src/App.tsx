import CardFlip from "./components/CardFlip";
import StarsCanvas from "./components/canvas/Stars";

function App() {
  return (
    <div className="relative z-0">
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-center justify-center flex-grow w-full">
          <CardFlip />
        </div>
      </main>
      <StarsCanvas />
    </div>
  );
}

export default App;
