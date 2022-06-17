import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>PizzaMania</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            ></Image>
          </Col>
        </Row>
        <br />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th colSpan={3} className="text-center">
                --Contact Us here--
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <FiPhoneCall />
              </td>
              <td>phone</td>
              <td>0123-766366</td>
            </tr>
            <tr>
              <td>
                <AiOutlineMail />
              </td>
              <td>Email</td>
              <td>pizzamania@gmail.com</td>
            </tr>
            <tr>
              <td>
                <AiOutlineInstagram />
              </td>
              <td>Instagram</td>
              <td>PizzaMania</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Contact;
