import "./App.css";

import { trpc } from "./trpc";

function App() {
  const hello = trpc.helloWorld.useQuery("chief keef");
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="text-3xl underline">
          {hello.data == null ? "loading !!" : hello.data}
        </div>
      </div>
    </>
  );
}

export default App;
