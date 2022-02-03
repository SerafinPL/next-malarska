import React from "react";

import styles from "./formspree.module.scss";

import { useForm, ValidationError } from "@formspree/react";

function Formspree(props) {
  const [state, handleSubmit] = useForm("xlezjdor");

  if (state.succeeded) {
    return <p className={styles.Text}>Dziękuje za wysłanie wiadomości</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
        <h1>Kontakt</h1>
      <textarea id="message" name="message" placeholder="Twoja wiadomość" />
      <div>
        <input id="email" type="email" name="email" placeholder="Adres email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit">Wyślij Wiadomość</button>
      </div>
    </form>
  );
}

export default Formspree;
