import axios from "@/config/axios";
import Circle from "public/images/cicle-accent-1.svg";
import Image from "next/image";
import Header from "@/app/parts/Header";
import Hero from "@/app/parts/Hero";

async function getData() {
    try {
        return await axios.get('/courses');
    } catch (error) {
        return error;
    }

}

export default async function Home() {
    const {status, data} = await getData();
    return (
        <main>
            <section className={'header-clipping pt-10'}>
                <Image src={Circle} alt={'...'} className={'absolute bottom-0 left-0'}/>
                <div className={'sunshine'}></div>
                <div className={'container mx-auto'}>
                    <Header/>
                    <Hero/>
                </div>
            </section>
        </main>
    )
}
