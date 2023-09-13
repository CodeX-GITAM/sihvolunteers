import React, { useState } from "react";

const AuthForm = ({
  onAuthenticationSuccess,
}: {
  onAuthenticationSuccess: () => void;
}) => {
  const [pass, setPass] = useState("");

  const authValid: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (pass === "hcfx6234") {
      onAuthenticationSuccess(); // Call the callback function on success
    } else {
      alert("Access Denied");
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <form
        className="bg-black w-[250px] rounded-xl flex items-center justify-center"
        onSubmit={authValid}>
        <input
          type="password"
          value={pass}
          placeholder="Password"
          autoComplete="new-password"
          onChange={(e) => setPass(e.target.value)}
          className="bg-slate-600 w-[200px] placeholder:text-white placeholder:font-bold text-white font-bold rounded-lg py-2 px-5 m-2"
        />
      </form>
    </div>
  );
};

export default AuthForm;
