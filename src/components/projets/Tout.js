import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import projetIMG from '../images/projet.png'
import Pagination from "react-js-pagination";


const Tout = () => {

    const projets = [
        {
            titre: "Tunisian Smart Cities 1",
            datedebut: "27 Février 2020",
            datefin: "27 Avril 2020",
            decription:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisis nostrud exercitation ullamco labor co laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
        },
        {
            titre: "Tunisian Smart Cities 2",
            datedebut: "27 Février 2021",
            datefin: "27 Avril 2021",
            decription:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisis nostrud exercitation ullamco labor co laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
        },
        {
            titre: "Tunisian Smart Cities 3",
            datedebut: "27 Février 2021",
            datefin: "27 Avril 2021",
            decription:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisis nostrud exercitation ullamco labor co laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
        },
        {
            titre: "Tunisian Smart Cities 4",
            datedebut: "27 Février 2020",
            datefin: "27 Avril 2020",
            decription:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisis nostrud exercitation ullamco labor co laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
        },
        {
            titre: "Tunisian Smart Cities 5",
            datedebut: "27 Février 2021",
            datefin: "27 Avril 2021",
            decription:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisis nostrud exercitation ullamco labor co laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
        },
        {
            titre: "Tunisian Smart Cities 6",
            datedebut: "27 Février 2020",
            datefin: "27 Avril 2020",
            decription:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisis nostrud exercitation ullamco labor co laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
        },
        {
            titre: "Tunisian Smart Cities 7",
            datedebut: "27 Février 2020",
            datefin: "27 Avril 2020",
            decription:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisis nostrud exercitation ullamco labor co laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
        },
        {
            titre: "Tunisian Smart Cities 8",
            datedebut: "27 Février 2021",
            datefin: "27 Avril 2021",
            decription:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisis nostrud exercitation ullamco labor co laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
        },
        {
            titre: "Tunisian Smart Cities 9",
            datedebut: "27 Février 2021",
            datefin: "27 Avril 2021",
            decription:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisis nostrud exercitation ullamco labor co laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
        },
        {
            titre: "Tunisian Smart Cities 10",
            datedebut: "27 Février 2021",
            datefin: "27 Avril 2021",
            decription:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisis nostrud exercitation ullamco labor co laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
        },
        {
            titre: "Tunisian Smart Cities 11",
            datedebut: "27 Février 2021",
            datefin: "27 Avril 2021",
            decription:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisis nostrud exercitation ullamco labor co laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
        },
    ];
    const projetPerPage = 6;
    const [activePage, setCurrentPage] = useState(1);
    // Logic for displaying current projet
    const indexOfLastTodo = activePage * projetPerPage;
    const indexOfFirstTodo = indexOfLastTodo - projetPerPage;
    const currentProjet = projets.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderProjet = currentProjet.map((el) => {
        return (
            <a href="/projet-1">
                <div className="evenement">
                    <img src={projetIMG} />
                    <h3>{el.datedebut} - {el.datefin}</h3>
                    <h2>{el.titre}</h2>
                    <p>{el.decription}</p>
                    <div className="lien-reserver">
                        <a href="#">Voir plus</a>
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
        <Container>
            <Container className="section-evenements">
                {renderProjet}
            </Container>
            <Container>
                <div className="pagination">
                    <span>Pages </span>
                    <Pagination
                        activePage={activePage}
                        //   itemsCountPerPage={3}
                        totalItemsCount={projets.length}
                        // pageRangeDisplayed={ 6 }
                        onChange={handlePageChange}
                    />
                </div>
            </Container>
        </Container>

    )
}

export default Tout