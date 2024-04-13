import React, { useState } from 'react';
import './App.css';

const Table = () => {

  return (
    <div>
        <div style={{ flex: 1 }}>
          <h1>Table Information</h1>
          <table>
            <tbody>
              <tr>
                <td>Macros</td>
                <td>Ideal</td>
                <td>Carbs</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>Data 2B</td>
                <td>Data 2C</td>
              </tr>
              <tr>
                <td>Fats</td>
                <td>Data 3B</td>
                <td>Data 3C</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>Data 4B</td>
                <td>Data 4C</td>
              </tr>
              <tr>
                <td>Calories</td>
                <td>Data 5B</td>
                <td>Data 5C</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Table;