'use client'
import { LogoGithub } from "./logo";

export default function Footer() {
    return (
        <footer className="flex justify-center my-4">
            <div className='flex justify-around'>
                <LogoGithub />
            </div>
        </footer>
    );
}