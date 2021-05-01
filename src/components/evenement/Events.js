import React from 'react';
import event from '../images/event.png'
import "react-datepicker/dist/react-datepicker.css";
import Container from 'react-bootstrap/Container'


const Events = () => {
    const items = [
        { titre: 'event 1', date: '27 Février 2021', decription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat' },
        { titre: 'event 2', date: '27 Février 2021', decription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat' },
        { titre: 'event 3', date: '27 Février 2021', decription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat' },
    ]

    return (
        <Container fluid className="section-evenments-a-venir">
            <h1>Evènement à venir</h1>
            <Container className="section-evenements">
                {
                    items.map(el => {
                        return (
                            <a href='/evenements/event-1'>
                                <div className="evenement">
                                    <img src={event} />
                                    <h3>{el.date}</h3>
                                    <h2>{el.titre}</h2>
                                    <p>{el.decription}</p>
                                    <div className="lien-reserver"><a href="#">Réserver votre place</a></div>
                                </div>
                            </a>
                        )
                    })
                }
            </Container>
        </Container>


    )
}

export default Events