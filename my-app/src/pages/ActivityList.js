import React from "react";
import styles from "../css/ActivityList.module.css";

export default function ActivityList() {
  return (
    <div className={styles.container}>
      <div className={styles.userlist}>
        <table className={styles.userTable}>
          <thead className={styles.tableHead}>
            <tr>
              <th>Name </th>
              <th>Time </th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            <tr>
              <td>Ecommarce</td>
              <td>2H</td>
              <td>Login Registration page donw with form validation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
