import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import DataFetcher from "./components/data-fetcher";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

const App = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="jumbotron jumbotron-fluid bg-transparent text-gray ">
              <div className="container">
                <h1 className="display-4 d-flex justify-content-center">
                  Student Performance Data Set
                </h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <DataFetcher />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
