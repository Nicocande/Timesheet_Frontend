import React from "react";
import {useState, useEffect} from "react";

function AccountList() {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    const tk = sessionStorage.getItem("token");
    fetch("http://localhost:8080/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tk}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setAccounts(json);
      })
      .catch((error) => {
        const json = [
          { id: 22, fname: "qwe", lname: "wer" },
          { id: 33, fname: "asd", lname: "asd" },
        ];
        console.log(error);
        setAccounts(json);
      });
  }, [accounts]);

  return (
    <>
      <select className="form-select">
        {accounts.map((curac) => (
          <OptionAccount ac={curac} />
        ))}
      </select>
    </>
  );
}
function OptionAccount(props) {
    return <option account-id={props.ac.id} value={props.ac.id}>{props.ac.fname} {props.ac.lname}</option>;
}

export default AccountList;
