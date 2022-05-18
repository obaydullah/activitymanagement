import React from "react";
import styles from "../css/PostActivity.module.css";

export default function PostActivity() {
  return (
    <div className={styles.userForm}>
      <form action="">
        <div className={styles.formgroup}>
          <input type="text" placeholder="Activity Name" />
          <input type="text" placeholder="Hour Take" />
        </div>
        <div className={styles.formgroup}>
          <textarea
            name=""
            id=""
            rows="8"
            placeholder="Activity Details"
          ></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
