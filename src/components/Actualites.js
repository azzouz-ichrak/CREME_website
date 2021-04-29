import React, { useState } from "react";
import Banner from './Banner'
import Container from 'react-bootstrap/Container'
import Pagination from "react-js-pagination";
import actIMG from './images/act2.png'

const Actualites = () => {
    const title = 'Actualités';
    const projets = [
        {
            titre: "Article de presse en 1983 : Soyons tous des M'TAOUAS ",
            date: "27 Février 2020",
            decription: "oluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
        },
        {
            titre: "Article de presse en 1983 : Soyons tous des M'TAOUAS ",
            date: "27 Février 2020",
            decription: "oluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
        },
        {
            titre: "Article de presse en 1983 : Soyons tous des M'TAOUAS ",
            date: "27 Février 2020",
            decription: "oluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
        },
        {
            titre: "Article de presse en 1983 : Soyons tous des M'TAOUAS ",
            date: "27 Février 2020",
            decription: "oluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
        },
        {
            titre: "Article de presse en 1983 : Soyons tous des M'TAOUAS ",
            date: "27 Février 2020",
            decription: "oluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
        },
        {
            titre: "Article de presse en 1983 : Soyons tous des M'TAOUAS ",
            date: "27 Février 2020",
            decription: "oluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
        },
        {
            titre: "Article de presse en 1983 : Soyons tous des M'TAOUAS ",
            date: "27 Février 2020",
            decription: "oluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
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
            <a href="/CREME_website/actualites/actualite-1">
                <div className="evenement">
                    <img src={actIMG} />
                    <h3>{el.date}</h3>
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
        <Container fluid>
            <Banner title={title} />
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
export default Actualites