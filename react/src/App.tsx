import Error from "./components/Error";
import Loading from "./components/Loading";
import { useDisclosure } from "./hooks/use-disclosure";
import { useFetch } from "./hooks/use-fetch";
import { useLocalStorage } from "./hooks/use-local-storage";
import { useOnlineStatus } from "./hooks/use-online-status";
import { useToggle } from "./hooks/use-toggle";
import { useWindowSize } from "./hooks/use-window-size";

const API = "https://dogapi.dog/api/v2/breeds";

function App() {
  const { width, height } = useWindowSize();
  const { content, error, loading } = useFetch<APIResponse>(API);
  const { isOnline } = useOnlineStatus();
  const { value, toggle, setTrue, setFalse } = useToggle(false);
  const [user, setUser] = useLocalStorage("user", { name: "", email: "" });
  const {
    setFalse: onClose,
    setTrue: onOpen,
    value: modelValue,
  } = useDisclosure();

  if (loading) return <Loading />;

  if (error) return <Error />;

  if (!content) return "Not found";

  return (
    <div>
      <h1>Test here</h1>

      <section>
        <span>{width}</span> x <span>{height}</span>
      </section>

      <section>
        <ul>
          {content.data
            .map((item: ContentType) => (
              <li key={item.id}>{item.attributes.name}</li>
            ))
            .slice(0, 10)}
        </ul>
      </section>

      <section>online: {isOnline ? "true" : "false"}</section>

      <section>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setTrue}>
          Set true
        </button>
        <button type="button" onClick={setFalse}>
          Set false
        </button>

        <p>{value ? "it is true" : "it is false"}</p>
      </section>

      <section>
        Email: {user.email}
        Name: {user.name}
        <button
          className="border"
          type="button"
          onClick={() => setUser({ name: "mgmg", email: "mgmg@gmail.com" })}
        >
          Change user
        </button>
      </section>

      <section>
        <button type="button" className="border" onClick={onOpen}>
          Open model
        </button>
        <button type="button" className="border" onClick={onClose}>
          Close model
        </button>
        Model value: {modelValue === true ? "Open model" : "Close model"}
      </section>
    </div>
  );
}

export default App;
