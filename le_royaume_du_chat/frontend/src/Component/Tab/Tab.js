import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tab.css';


export default class Tab extends Component {
    render() {
        return (
          
          

            <table class="table table-bordered">

  <thead>
    <tr>
      <th scope="col">Service</th>
      <th scope="col">Chaton</th>
      <th scope="col">Chat adulte</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Manucure (coupe des griffes selon préférences et soin)</td>
      <td>18€</td>
      <td>24€</td>
      <td>+10€ Pose vernis</td>
    </tr>
    <tr>
    <td>Brushing (shampoing, soin et brossage)</td>
      <td>26€</td>
      <td>32€</td>
      <td>+10€ Épilation</td>
    </tr>
    <tr>
    <td>Massage (relaxation de 30 min de la tête, du ventre, des pâtes, du dos et de la queue)</td>
      <td>34€</td>
      <td>42€</td>
      <td>+10€ Soin douceur</td>
    </tr>
  </tbody>
</table>

        )
    }
}
