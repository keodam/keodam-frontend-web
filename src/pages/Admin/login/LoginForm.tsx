import style from "./LoginForm.module.less";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ReactComponent as LoginLogo } from '../../../assets/Admin/login/loginlogo.svg?react';
import loginLogo from '../../../assets/Admin/login/loginlogo.svg';
import { signIn } from "../../../axios/login";




const LoginForm = () => {
  // id, password를 useState를 통해 상태관리: 로그인 시 필요한 정보
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleId = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setId(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();


  const handleLogin = async () => {
      try {
          await signIn(id, password);
          alert('로그인 성공');
          navigate("../dash");
       } catch (error) {
          alert('로그인 실패');
          console.error(error);
       }
  };

  return (
    <div>
      <img src={loginLogo} alt="Login Logo" className={style.loginIcon} />
      <form className={style.loginForm}>
        <div className={style.idPw}>
        <div className={style.formIdPw}>
          <select
            name="id"
            className={style.idSelect}
            value={id}
            onChange={handleId}
          >
            <option value="">id</option>
            <option value="leader">leader</option>
            <option value="pm">pm</option>
            <option value="web">web</option>
            <option value="back">back</option>
            <option value="ai">ai</option>
          </select>
        </div>
        <div className={style.formIdPw}>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className={style.pwInput}
            value={password}
            onChange={handlePassword}
          />
        </div>
        </div>
        <div className={style.loginButton} onClick={handleLogin}>
          로그인
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
