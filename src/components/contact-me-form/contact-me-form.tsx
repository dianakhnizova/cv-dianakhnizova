import { useState } from "react";
import { Button } from "../button/button";
import styles from "./contact-me-form.module.css";
import { messages } from "./messages";
import FrameIcon from "@/assets/Frame.png";
import { validationInput } from "./validation-input";

export const ContactMeForm = () => {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");
  const [error, setError] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setName(inputValue);

    const error = validationInput(inputValue);
    setError(error);
  };

  const handleReasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReason(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.mainTitle}>{messages.contactMeTitle}</h3>
      <form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          {messages.labelName}
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder={messages.inputPlaceholder}
          className={!error ? styles.input : styles.errorInput}
        />
        {error && <p className={styles.errorContainer}>{error}</p>}

        <label htmlFor="reason" className={styles.label}>
          {messages.labelReason}
        </label>
        <select
          id="reason"
          value={reason}
          onChange={handleReasonChange}
          className={styles.select}
        >
          <option value="" disabled hidden>
            Select reason
          </option>
          <option value="help">{messages.labelHelp}</option>
          <option value="suggest">{messages.labelInvite}</option>
        </select>

        <Button disabled={!!error} className={styles.sendButton}>
          <img src={FrameIcon} alt="frame-button" />
          {messages.sendButton}
        </Button>
      </form>
    </div>
  );
};
