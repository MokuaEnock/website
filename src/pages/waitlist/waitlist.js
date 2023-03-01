import "./waitlist.css";

import { useState } from "react";

import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function WaitL() {
  let [isModalOpen, setIsModalOpen] = useState(false);

  function handleJoin(e) {
    e.preventDefault();
    setIsModalOpen(true);
  }

  return (
    <main id="wait-page" onSubmit={handleJoin}>
      <h1>
        Join the waitlist for <br />
        Kilimo Africa
      </h1>
      <form id="wait-form">
        <span>
          <FiUser size={32} />
          <input type="text" placeholder="Full name" />
        </span>

        <span>
          <FiPhone id="wait-icons" size={32} />
          <input type="text" placeholder="Your phone number" />
        </span>

        <span>
          <FiMail className="wait-icons" size={32} />
          <input type="text" placeholder="Enter your E-Mail address" />
        </span>
        <textarea placeholder="Any additional feedback" />
        <button type="submit">
          <p>Join the waitlist</p>
        </button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <FaCheckCircle className="check-icon" />
        <h2 className="modal-head">Congratulations</h2>
        <p className="modal-par">You are number 4 on the waitlist.</p>
        <button
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="modal-button"
        >
          Close
        </button>
      </Modal>
    </main>
  );
}
