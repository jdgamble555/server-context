import { useServerProvider } from "./use-server-provider"

export default function TestChild() {

    const [count] = useServerProvider<number>('count');

    return (
        <p>Child: {count}</p>
    )
}