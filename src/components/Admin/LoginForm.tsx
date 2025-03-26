import style from "./LoginForm.module.less";
import { useState } from "react";

const LoginForm = () => {
  // id, password를 useState를 통해 상태관리
  const [id, setId] = useState<string>("");
  const [passWord, setPassWord] = useState<string>("");

  return (
    <div>
      <form className={style.loginForm}>
        <div className={style.formIdPw}>
          아이디:
          <select
            name="id"
            className={style.idSelect}
            value={id}
            onChange={(e) => setId(e.target.value)}
          >
            <option value="leader">leader</option>
            <option value="pm">pm</option>
            <option value="web">web</option>
            <option value="back">back</option>
            <option value="ai">ai</option>
          </select>
        </div>
        {/* 비밀번호는 직접 입력해서 넣을 수 있도록 
            비밀번호 조건은 어떻게 만들 것인가. */}
        <div className={style.formIdPw}>
          비밀번호:
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            className={style.pwInput}
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        <div className={style.loginButton}>로그인</div>
      </form>
    </div>
  );
};

export default LoginForm;
