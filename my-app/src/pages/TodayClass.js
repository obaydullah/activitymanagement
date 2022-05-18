import React from "react";
import styles from "../css/TodaysClass.module.css";

export default function TodayClass() {
  return (
    <div className={styles.container}>
      <div className={styles.userForm}>
        <form action="">
          <div className={styles.formgroup}>
            <input type="text" placeholder="Batch" />
            <input type="text" placeholder="Time" />
          </div>

          <div className={styles.formgroup}>
            <input
              type="number"
              placeholder="Room"
              className={styles.inputnumber}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className={styles.userlist}>
        <table className={styles.userTable}>
          <thead className={styles.tableHead}>
            <tr>
              <th>Batch Name</th>
              <th>Time </th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            <tr>
              <td>CIT ES MERN 2101</td>
              <td>6-8</td>
              <td>205</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
