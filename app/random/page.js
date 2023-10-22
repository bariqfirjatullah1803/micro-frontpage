import Head from "next/head";
import Link from "next/link";

export const metadata = {
    title: 'Random',
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page() {
    const data = await getData();
    return (
        <main className={'container mx-auto mt-12'}>
            <h1 className={'text-3xl'}>Fetching random words</h1>
            <ul>
                {
                    data.map(todo => {
                        return <li key={todo.id} className={'border border-indigo-700 p-3'}>
                            {todo?.title ?? ""} <Link href={`/random/${todo.id}`}>Launch</Link>
                        </li>
                    })
                }
            </ul>
        </main>
    );
}
