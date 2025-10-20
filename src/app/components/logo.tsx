import Image from 'next/image'

export function LogoGithub() {
    return (
        <a href="https://github.com/Xupie" target="_blank">
            <Image
                src={`/github/github-mark-white.svg`}
                alt={'logo of github'}
                width={36}
                height={36}
                className='hover'
                loading='lazy'
            />
        </a>
    );
}