import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Banner from "./Banner";
import eventIMG from "../components/images/event.png";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-js-pagination";

const Evenements = () => {
  const [startDate, setStartDate] = useState(new Date());
  const title = "Evenements";
  const event = [
    {
      titre: "event 1",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
    {
      titre: "event 2",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
    {
      titre: "event 3",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
    {
      titre: "event 4",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
    {
      titre: "event 5",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
    {
      titre: "event 6",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
    {
      titre: "event 7",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
    {
      titre: "event 8",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
    {
      titre: "event 9",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
    {
      titre: "event 10",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
    {
      titre: "event 11",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
    {
      titre: "event 12",
      date: "27 Février 2021",
      decription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    },
  ];

  const eventPerPage = 6;
  const [activePage, setCurrentPage] = useState(1);

  // Logic for displaying current event
  const indexOfLastTodo = activePage * eventPerPage;
  const indexOfFirstTodo = indexOfLastTodo - eventPerPage;
  const currentEvent = event.slice(indexOfFirstTodo, indexOfLastTodo);

  const renderEvent = currentEvent.map((el) => {
    return (
      <a href="/evenements/event-1">
        <div className="evenement">
          <img src={eventIMG} />
          <h3>{el.date}</h3>
          <h2>{el.titre}</h2>
          <p>{el.decription}</p>
          <div className="lien-reserver">
            <a href="#">Réserver votre place</a>
          </div>
        </div>
      </a>
    );
  });
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };
  return (
    <Container fluid>
      <Banner title={title} />
      <div id="filter">
        <Container>
          <Row>
            <Col>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Col>
            <Col>
              <input className="input-localisation" type="text" placeholder="Où ?" />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="section-evenements">
        {renderEvent}
      </Container>
      <Container>
        <div className="pagination">
          <span>Pages </span>
          <Pagination
            activePage={activePage}
            //   itemsCountPerPage={3}
            totalItemsCount={event.length}
            // pageRangeDisplayed={ 6 }
            onChange={handlePageChange}
          />
        </div>
      </Container>
    </Container>
  );
};

export default Evenements;
