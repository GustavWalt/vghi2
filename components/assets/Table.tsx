import React from "react";
import styles from "../../style/modules/assets/Table.module.scss";

//Data
import questsObj from "../../data/quests.json";

const Table = (props) => {
  console.log(props.data);

  return (
    <>
      <table className={styles.table}>
        <tr>
          <th>Name</th>
          <th>Difficulty</th>
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
                <button>Order now</button>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default Table;
