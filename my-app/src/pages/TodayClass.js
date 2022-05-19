import React, { useState, useEffect } from "react";
import styles from "../css/TodaysClass.module.css";
import axios from "axios";

export default function TodayClass() {
  let [batch, setBatch] = useState("");
  let [time, setTime] = useState("");
  let [room, setRoom] = useState();
  let [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/todaysclass", {
        batch,
        time,
        room,
      })
      .then(() => {
        setBatch("");
        setTime("");
        setRoom("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const todaysClassFunc = async () => {
      let { data } = await axios.get("http://localhost:8000/todaysclass");
      setData(data);
    };
    todaysClassFunc();
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.userForm}>
        <form action="" onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <input
              type="text"
              placeholder="Batch"
              onChange={(e) => setBatch(e.target.value)}
              value={batch}
            />
            <input
              type="text"
              placeholder="Time"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
          </div>

          <div className={styles.formgroup}>
            <input
              type="number"
              placeholder="Room"
              className={styles.inputnumber}
              onChange={(e) => setRoom(e.target.value)}
              value={room}
            />
          </div>
          <input type="submit" value="Submit" onClick={handleSubmit} />
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
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.batch}</td>
                <td>{item.time}</td>
                <td>{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
