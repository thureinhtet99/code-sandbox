import { useRef } from "react";

export default function ControlledForm() {
  // const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    console.log(emailRef.current?.value); // always in sync with input
  };

  return (
    <div>
      <input type="email" ref={emailRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
