import { useState } from "react";

function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const dati = {
      fname,
      email,
      pwd,
    };
    const stringDati = JSON.stringify(dati);

    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: stringDati,
    })
      .then((res) => res.text())
      .then((testo) => {
        console.log(testo);
        alert(`id nuovo=${testo}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your firstname:
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </label>
      <label>
        Enter your lastname:
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </label>
      <label>
        Enter your email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Enter your pwd:
        <input
          type="text"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Register;
