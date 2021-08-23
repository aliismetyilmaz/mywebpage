import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "./components/Head/Head";
import Experience from "./components/Body/Experience";
import Education from "./components/Body/Education";
import Certifications from "./components/Body/Certifications";
import Foot from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container >
          <Head />
        </Container>
      </header>
      <body className="App-body">
        <Container style={{ marginBottom: "40px" }}>
          <Experience />
        </Container>
        <Container style={{ marginBottom: "40px" }}>
          <Education />
        </Container>
        <Container style={{ marginBottom: "40px" }}>
          <Certifications />
        </Container>
      </body>
      <footer className="App-footer">
        <Foot />
      </footer>
    </div>
  );
}

export default App;
