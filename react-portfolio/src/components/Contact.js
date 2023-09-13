import React, { useState } from "react";
import "../App.css";
import { db } from "../firebase";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [emailSub, setEmailSub] = useState("");
  const [desc, setDesc] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    db.collection("suggestions")
      .add({
        name,
        email,
        number,
        emailSub,
        desc,
      })
      .then((e) => alert("response received ThanYou!"))
      .catch((e) => console.log(e));
    setName("");
    setEmail("");
    setNumber("");
    setEmailSub("");
    setDesc("");
  };
  return (
    <div>
      <section class="contact" id="contact">
        <h2 class="heading">
          Contact <span>Me!</span>
        </h2>
        <form onSubmit={handleUpdate} action="#">
          <div class="input-box">
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="input-box">
            <input
              type="number"
              placeholder="Mobile Number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email subject"
              onChange={(e) => setEmailSub(e.target.value)}
            />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button className="btn">submit response</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
