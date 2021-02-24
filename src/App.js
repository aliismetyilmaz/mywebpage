import "./App.css";
import Container from "react-bootstrap";
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
        <Container>
          <Head />
        </Container>{" "}
      </header>{" "}
      <body className="App-body">
        <Container>
          <Experience />
        </Container>{" "}
        <hr> </hr>{" "}
        <Container>
          <Education />
        </Container>{" "}
        <hr> </hr>{" "}
        <Container>
          <Certifications />
        </Container>{" "}
        <hr> </hr>{" "}
      </body>{" "}
      <footer className="App-footer">
        <Foot />
      </footer>{" "}
    </div>
  );
}

export default App;
