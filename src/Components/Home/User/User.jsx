import React from "react";
import styles from './User.module.css'

export const User = () => {
  return (
    <div class={styles.userForm}>
      <form className={styles.form}>
        <h1 class={styles.title}>Вход</h1>

        <div class={styles.formFloating}>
          <input
            type="email"
            class={styles.formControl}
            id="floatingInput"
            placeholder="name@email.com"
          />
        </div>
        <div class={styles.formFloating}>
          <input
            type="password"
            class={styles.formControl}
            id="floatingPassword"
            placeholder="Пароль"
          />
        </div>

        <div class={styles.checkbox}>
          <label>
            <input type="checkbox" value="remember-me" /> Запомнить пароль?
          </label>
        </div>
        <button class={styles.btn} type="submit">
          Войти
        </button>
        <p class={styles.text}>&copy; 2021–2023</p>
      </form>
    </div>
  );
};
