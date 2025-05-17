import LoginForm from "../../components/Admin/LoginForm";
import styles from "./LoginPage.module.less";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
