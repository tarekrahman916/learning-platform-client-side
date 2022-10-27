import React from "react";
import { Image } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import faqsImage from "../../assets/faqsImage.jpg";

const Faqs = () => {
  return (
    <div>
      <div className="p-5 border shadow mb-4 text-center">
        <h1>FAQS</h1>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>About Us</Accordion.Header>
                <Accordion.Body>
                  Techno Academy is one of the online learning platform on
                  Bangladesh
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Which type of written content do you create?
                </Accordion.Header>
                <Accordion.Body>
                  Written content can be created in the form of textbook notes,
                  questions & answers, MCQs, conceptual topics, solutions of
                  numerical questions, quizzes, solved and unsolved past papers
                  etc.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How many teachers’ team do you have?
                </Accordion.Header>
                <Accordion.Body>
                  We have more than 30 teachers’ team who work via telecommuting
                  or on-campus work, based on the requirement. They have subject
                  expertise and fully trained with the process of delivering
                  complete digital solutions for the students.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-6">
            <Image fluid src={faqsImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
