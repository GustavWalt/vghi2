import React, { useEffect } from "react";
import styles from "../../style/modules/assets/Table.module.scss";

//Data
import questsObj from "../../data/quests.json";
import bossesObj from "../../data/bosses.json";

//Assets
import Order from "./order";

const search = () => {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-function");
  filter = input.value.toUpperCase();
  table = document.querySelector("table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

const Table = (props) => {
  return (
    <>
      <table className={styles.table}>
        <input
          type="text"
          id="search-function"
          onKeyUp={search}
          placeholder="Search for names.."
        />
        <tr>
          <th>Name</th>
          {props.data == "questing" && <th>Difficulty</th>}
          <th>Price</th>
          <th>Order</th>
        </tr>
        {props.data == "questing" &&
          questsObj.quests.map((quest) => (
            <tr>
              <td>{quest.name}</td>
              <td>{quest.difficulty}</td>
              <td>{quest.price}</td>
              <td>
                <Order name={quest.name} price={quest.price} />
              </td>
            </tr>
          ))}
        {props.data == "bossing" &&
          bossesObj.bosses.map((boss) => (
            <tr>
              <td>{boss.name}</td>
              <td>{boss.price}</td>
              <td>
                <Order name={boss.name} price={boss.price} />
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default Table;
