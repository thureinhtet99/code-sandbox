import { useActionState } from "react";

type FormState = {
  success: boolean;
  message: string;
  error?: {
    email?: string;
    password?: string;
  };
};

export default function LoginForm() {
  const [state, action, isPending] = useActionState(loginAction, initialState);

  return (
    <form action={action} className="space-y-4 border">
      <div className="flex flex-col">
        <input type="email" name="email" className="border" />
        <span>{state.error?.email}</span>
      </div>
      <div className="flex flex-col">
        <input type="password" name="password" className="border" />
        <span>{state.error?.password}</span>
      </div>

      <div className="flex gap-x-4">
        <button
          type="submit"
          className="border rounded-xl p-2"
          disabled={isPending}
        >
          Submit
        </button>
        <button type="reset" className="border rounded-xl p-2">
          Reset
        </button>
      </div>

      <h1>{state.message}</h1>
    </form>
  );
}

const loginAction = async (
  state: FormState,
  formData: FormData,
): Promise<FormState> => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email)
    return {
      success: false,
      message: "Failed",
      error: { email: "Email is required" },
    };

  if (!password)
    return {
      success: false,
      message: "Failed",
      error: { password: "Email is required" },
    };

  await new Promise((res) => setTimeout(res, 2000));

  if (email === "jason@gmail.com" && password === "123456")
    return { success: true, message: "Login successful!" };

  return { success: false, message: "Invalid credentials" };
};

const initialState: FormState = {
  success: false,
  message: "",
};
