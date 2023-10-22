"use client"
import Logo from '@/public/images/logo.svg';
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const Header = ({onLight}) => {
    const linkColor = onLight ? "text-gray-900" : "text-white";

    const pathName = usePathname();
    console.log(pathName)

    const linkCTA = pathName.indexOf("/login") > -1 ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register` : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
    const textCTA = pathName.indexOf("/login") > -1 ? "Daftar" : "Masuk";
    return (<header className={'flex justify-between items-center'}>
        <div style={{height: 54}}>
            <Image src={Logo} alt={'Logo'} className={'on-dark'}/>
        </div>
        <ul className={'flex'}>
            <li>
                <Link href={'/'}
                      className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Home</Link>
            </li>
            <li>
                <Link href={'/'}
                      className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Pricing</Link>
            </li>
            <li>
                <Link href={'/'}
                      className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Features</Link>
            </li>
            <li>
                <Link href={'/'}
                      className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Story</Link>
            </li>
            <li>
                <Link
                    href={linkCTA}
                    target={'_blank'}
                    className={'bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6'}>{textCTA}</Link>
            </li>
        </ul>
    </header>);
};

export default Header;