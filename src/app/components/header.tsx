'use client'
import Link from 'next/link';
import { LogoGithub } from './logo';

export default function Header() {
    return (
        <header>
            <nav className='py-3 w-full px-20 flex items-center justify-between'>
                <ul className='ms-1 flex gap-8 items-center'>
                    <li className='hover'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='hover'>
                        <Link href="/about">About</Link>
                    </li>
                    <li className='hover'>
                        <Link href="/skills">Skills</Link>
                    </li>
                    <li className='hover'>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
                <div className='nav-right'>
                    <LogoGithub />
                </div>
            </nav>
        </header>
    );
}