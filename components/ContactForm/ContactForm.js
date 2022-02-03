import React from "react";

import styles from "./formspree.module.scss";

import { useForm, ValidationError } from "@formspree/react";

function Formspree(props) {
  const [state, handleSubmit] = useForm("xlezjdor");

  if (state.succeeded) {
    return <p>Dziękuje za wysłanie wiadomości</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <label htmlFor="name">Imię</label>
      <input id="name" type="text" name="name" placeholder="Twoje imię"/>
      <label htmlFor="email">Adres email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Adres@email.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Wiadomość</label>
      <input id="message" name="message" placeholder="Treść Wiadomości" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        variant="outlined"
        disabled={state.submitting}
        sx={{ m: 1 }}
      >
        Wyślij Wiadomość
      </button>
    </form>
  );
}

export default Formspree;
