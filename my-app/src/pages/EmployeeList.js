import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../css/EmployeeList.module.css";

export default function EmployeeList() {
  let [name, setName] = useState("");
  let [officetime, setOfficetime] = useState("");
  let [designation, setDesignation] = useState("");
  let [dayoff, setDayOff] = useState("");
  let [phone, setPhone] = useState();
  let [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/employeelist", {
        name,
        officetime,
        designation,
        dayoff,
        phone,
      })
      .then(() => {
        setName("");
        setOfficetime("");
        setDesignation("");
        setDayOff("");
        setPhone("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const employeeFunc = async () => {
      let { data } = await axios.get("http://localhost:8000/employeelist");
      setData(data);
    };
    employeeFunc();
  }, [data]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.userForm}>
          <form action="" onSubmit={handleSubmit}>
            <div className={styles.formgroup}>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="name"
                value={name}
              />
              <input
                onChange={(e) => setOfficetime(e.target.value)}
                type="text"
                placeholder="Office Time"
                value={officetime}
              />
            </div>
            <div className={styles.formgroup}>
              <input
                onChange={(e) => setDesignation(e.target.value)}
                type="text"
                placeholder="designation"
                value={designation}
              />
              <input
                onChange={(e) => setDayOff(e.target.value)}
                type="text"
                placeholder="Day Off "
                value={dayoff}
              />
            </div>
            <div className={styles.formgroup}>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="Phone"
                value={phone}
                className={styles.inputnumber}
              />
            </div>
            <input type="submit" value="Submit" onClick={handleSubmit} />
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
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.designation}</td>
                  <td>{item.officetime}</td>
                  <td>{item.offday}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
