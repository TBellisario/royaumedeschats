import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Article extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h2>Les bienfaits</h2>
           
              <p className="lead">Le bien-être animal est tout aussi important que le bien-être humain. La pratique du massage animal, datant de la Grèce Antique, permet de relaxer et de dynamiser votre chat. Bien que ce soit recommandé pour les chats en convalescence ou les chats plus âgés, cela permet une pause détente non-négligeable. Si votre chat n’a pas encore eu l’occasion de profiter de ce moment de bien-être, vous verrez qu’il fait bel et bien la différence sur son humeur. Consultez nos tarifs et prenez vite rendez-vous !</p>
            </div>
            </div>
        );
    }
}

export default Article;