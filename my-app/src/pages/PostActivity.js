import React, { useState } from "react";
import styles from "../css/PostActivity.module.css";
import axios from "axios";

export default function PostActivity() {
  let [name, setName] = useState("");
  let [hour, setHour] = useState("");
  let [details, setDetails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/activity", {
        name,
        hour,
        details,
      })
      .then(() => {
        setName("");
        setHour("");
        setDetails("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.userForm}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.formgroup}>
          <input
            type="text"
            placeholder="Activity Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Hour Take"
            onChange={(e) => setHour(e.target.value)}
            value={hour}
          />
        </div>
        <div className={styles.formgroup}>
          <textarea
            name=""
            id=""
            rows="8"
            placeholder="Activity Details"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </div>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
