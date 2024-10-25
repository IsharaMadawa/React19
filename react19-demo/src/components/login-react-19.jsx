//useFormStatus
import { useActionState } from "react";
import { loginUser } from "../api/user";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  //https://react.dev/reference/react-dom/hooks/useFormStatus
  //https://react.dev/blog/2024/04/25/react-19#new-hook-useformstatus - in parentContext without state mng.
  //const { pending, data, method, action } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Logging in..." : "Login"}
    </button>
  );
};

const LoginReact19 = () => {
  const [
    user,
    submitAction,
    // isPending
  ] = useActionState(login, {
    error: null,
    data: null,
  });

  async function login(previousState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const response = await loginUser(username, password);
      return { error: null, data: response.data };
    } catch (error) {
      return { ...previousState, error: error.error };
    }
  }

  return (
    <form action={submitAction}>
      <div>
        <label>Username:</label>
        <input name="username" type="text" required />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" required />
      </div>

      <SubmitButton />

      {user.data && (
        <p style={{ color: "green" }}>Logged in: {user.data.email}</p>
      )}

      {user.error && <p style={{ color: "red" }}>{user.error}</p>}
    </form>
  );
};

export default LoginReact19;