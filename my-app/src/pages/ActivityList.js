import React, { useState, useEffect } from "react";
import styles from "../css/ActivityList.module.css";
import axios from "axios";

export default function ActivityList() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const activityFunc = async () => {
      let { data } = await axios.get("http://localhost:8000/activity");
      setData(data);
    };
    activityFunc();
  }, [data]);

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
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.hour}</td>
                <td>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
