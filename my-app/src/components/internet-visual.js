import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  Label
} from "recharts";
import { Container, Col, Row } from "reactstrap";

const InternetVisual = props => {
  const data = [
    {
      name: "No Internet Access",
      averageWithoutInternet: props.noAccessGrade,
      showNoAccess: props.noAccessGrade
    },
    {
      name: "Internet Access",
      averageWithInternet: props.accessGrade,
      showAccess: props.accessGrade
    },
    {
      name: "Comparison",
      averageWithInternet: props.accessGrade,
      averageWithoutInternet: props.noAccessGrade
    }
  ];

  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <BarChart
              width={1000}
              height={500}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              style={{ fontSize: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis>
                <Label
                  value="average grade"
                  angle={-90}
                  position="insideLeft"
                />
              </YAxis>

              <Tooltip />
              <Legend />
              <Bar
                name={
                  props.studentCountWithoutAccess + " students w/o internet"
                }
                dataKey="averageWithoutInternet"
                stackId="a"
                fill="#7DAB24"
                background={{ fill: "#eee" }}
                barSize={80}
              >
                <LabelList dataKey="showNoAccess" position="top" />
              </Bar>

              <Bar
                name={props.studentCountWithAccess + " students w/ internet"}
                dataKey="averageWithInternet"
                stackId="a"
                fill="#141213"
              >
                <LabelList dataKey="showAccess" position="top" />
              </Bar>
            </BarChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InternetVisual;
