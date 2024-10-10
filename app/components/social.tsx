import Link from 'next/link';
import React from 'react'
import { BiHeart } from 'react-icons/bi';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type SocialItems = {
    name: string;
    href: string;
    icon: React.ElementType;
}

const socialList: SocialItems[] = [
    {
        name: "Github",
        href: "https://github.com/hrriiii",
        icon: FaGithub
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/muhammad-haris-shahbaz-7a7553178/",
        icon: FaLinkedin
    }
]

const Social = () => {
    return (
        <div className='flex flex-col justify-between items-center mx-auto max-w-xs my-5'>
            <div className='flex gap-x-5'>
                {
                    socialList.map((social, index) => (
                        <Link key={index} href={social.href}>
                            <div className='rounded-full w-10 h-10 flex justify-center items-center bg-primary'>
                                <social.icon className={"w-6 h-6 text-black"} />
                            </div>
                        </Link>
                    ))
                }
            </div>

            <p className='flex items-center mt-5'> {/* Added mt-auto to push this down */}
                Made with <BiHeart className='text-primary w-6 h-6 ml-2' />
            </p>
        </div>

    )
}

export default Social