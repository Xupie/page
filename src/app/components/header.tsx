'use client'
import Image from 'next/image'

export default function Header() {
    return (
        <header className='static h-3'>
            <nav>
                <a href="/about">About</a>
                <a href="/skills">Skills</a>
                <a href="/projects">Projects</a>
                <a className="relative w-6 h-6" href="http://">
                    <Image
                        src={`/github/github-mark.svg`}
                        alt={'logo of github'}
                        fill={true}
                    />
                </a>
            </nav>
        </header>
    );
}