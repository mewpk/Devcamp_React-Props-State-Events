import Container from './Components/Container'
import Navbar from "./Components/Navbar"
import Content from "./Components/Content"
import { Route} from 'react-router-dom';



function App() {
  return (
    <>
    <Routes>
    <Container>
      <Navbar/>
      <Content/>
    </Container>
    </Routes>
    
    </>
  );
}

export default App;
