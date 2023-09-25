import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./Components/Header";
import Movies from "./Routes/Movies";
import NewPopular from "./Routes/NewPopular";
import MyList from "./Routes/MyList";

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/tv" element={<Tv />} />
      <Route path="/moives" element={<Movies />} />
      <Route path="/newpopular" element={<NewPopular />} />
      <Route path="/mylist" element={<MyList />} />
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={< Home />} />
    </Routes>
  </Router>
  )
}

export default App;