import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css';



class Content extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
              
            <div className="container">
            <h2>La boutique</h2>
              <p className="lead">Située au 37 rue de Grenelle à Paris, à quelques pas de la belle Tour Eiffel, ce salon de toilettage est entièrement destiné aux chats, toutes races. Au sein de ce royaume, vos chats pourront profiter de différents services de qualité, tels que la manucure, le brushing et notre spécialité, le massage. Notre équipe, passionnée par ces félins, se compose de trois personnes, chacune spécialisée dans un des services et dotée des meilleures formations en France. Venez découvrir notre boutique où des magnifiques surprises attendent vos chats, du lundi au vendredi de 9h à 18h. </p>
            </div>
            </div>
        );
    }
}

export default Content;