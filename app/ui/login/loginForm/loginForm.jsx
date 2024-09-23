"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h2>สืบค้นข้อมูลสารบรรณอิเล็กทรอนิกส์</h2>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>เข้าสู่ระบบ</button>
      {state && state}
    </form>
  );
};

export default LoginForm;
