import TestChild from "./test-child";
import { useServerProvider } from "./use-server-provider";

export default function Test() {

  const [count, setCount] = useServerProvider('count', 23);

  setCount(Math.floor(Math.random() * 100) + 1);

  return (
    <>
      <TestChild />
      <p>Parent: {count}</p>
    </>
  )
}