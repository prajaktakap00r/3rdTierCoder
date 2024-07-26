import Code from "./Pages/Code";

import Explanation from "./Pages/Explanation";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Explanation />
      <Code />
      <Footer />
    </main>
  );
}

export default App;
