import style from "./LoginForm.module.less";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  // id, password를 useState를 통해 상태관리: 로그인 시 필요한 정보
  const [id, setId] = useState<string>("");
  const [passWord, setPassWord] = useState<string>("");

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);

  const handlePassWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassWord(e.target.value);
  };

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("../dash");
  };

  return (
    <div>
      <form className={style.loginForm}>
        <div className={style.idPw}>
        <div className={style.formIdPw}>
          <input
            type="text"
            name="id"
            placeholder="아이디"
            className={style.pwInput}
            value={id}
            onChange={handleId}
            />
          {/* <select
            name="id"
            className={style.idSelect}
            value={id}
            onChange={handleId}
          >
            <option value="leader">leader</option>
            <option value="pm">pm</option>
            <option value="web">web</option>
            <option value="back">back</option>
            <option value="ai">ai</option>
          </select> */}
        </div>
        {/* 비밀번호는 직접 입력해서 넣을 수 있도록 
            비밀번호 조건은 어떻게 만들 것인가. */}
        <div className={style.formIdPw}>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className={style.pwInput}
            value={passWord}
            onChange={handlePassWord}
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
