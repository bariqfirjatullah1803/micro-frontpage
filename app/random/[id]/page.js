import Link from "next/link";

export async function generateMetadata({params, searchParams}, parent) {
    const id = params.id
    const todos = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => res.json())
    return {
        title: `Random | ${todos.title}`,
    }
}

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page({params, searchParams}) {
    const id = params.id;
    const data = await getData(id);
    return (
        <main className={'container mx-auto mt-12'}>
            <h1 className={'text-3xl'}>{data.title}</h1>
            <p>Please complete your task</p>
            <Link href={'/random'}>Bring me to random page</Link>
        </main>
    );
}
