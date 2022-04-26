import React from 'react';

const PriceTable = () => (
  <table className="price-table">
    <tbody>
      <tr className="price-table__row">
        <th className="price-table__service">Palvelut</th>
        <th className="price-table__price">Hinta EUR</th>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service">Sokeroinnit</td>
        <td className="price-table__price">Alk. 10 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Sääret
        </td>
        <td className="price-table__price">40 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Reidet
        </td>
        <td className="price-table__price">40 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Sääret ja reidet
        </td>
        <td className="price-table__price">60 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Bikinilinja
        </td>
        <td className="price-table__price">20 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Bikini string
        </td>
        <td className="price-table__price">30 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Kainalot
        </td>
        <td className="price-table__price">20 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Käsivarret
        </td>
        <td className="price-table__price">25 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Brasilialainen ensimmäinen kerta <span>&#42;</span>
        </td>
        <td className="price-table__price">60 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Brasilialainen ylläpito <span>&#42;</span>
        </td>
        <td className="price-table__price">50 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Ylähuuli
        </td>
        <td className="price-table__price">10 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Kasvot
        </td>
        <td className="price-table__price">20 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Kulmien muotoilu sokeroinnilla
        </td>
        <td className="price-table__price">10 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Useamman alueen sokerointi
        </td>
        <td className="price-table__price">Kysy tarjous!</td>
      </tr>
    </tbody>
  </table>
);

export default PriceTable;
