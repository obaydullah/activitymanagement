import React from "react";
import styles from "../css/EmployeeList.module.css";

export default function EmployeeList() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.userForm}>
          <form action="">
            <div className={styles.formgroup}>
              <input type="text" placeholder="name" />
              <input type="text" placeholder="Office Time" />
            </div>
            <div className={styles.formgroup}>
              <input type="text" placeholder="designation" />
              <input type="text" placeholder="Day Off " />
            </div>
            <div className={styles.formgroup}>
              <input
                type="number"
                placeholder="Phone"
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
                <th>Name</th>
                <th>Designation</th>
                <th>Office Time </th>
                <th>Off Day </th>
                <th>Phone </th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              <tr>
                <td>Obaydullah</td>
                <td>Front-end Developer</td>
                <td>10-8</td>
                <td>Sunday</td>
                <td>01963851464</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
