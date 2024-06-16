"use client"
import { Group, Title, UnstyledButton, Text } from '@mantine/core';
import Link from 'next/link';
import { forwardRef } from 'react';


interface MenuButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    text: any;
}

const services = [
    {
        title: 'Engineering',
        text: 'Find the best solution for you',
        link: '/#'
    },
    {
        title: 'Agriculture',
        text: 'Find the best solution for you',
        link: '/#'
    },
    {
        title: 'Biofuel and Diesel',
        text: 'Find the best solution for you',
        link: '/#'
    },
    {
        title: 'Power Generation',
        text: 'Find the best solution for you',
        link: '/#'
    }
]

const resources = [
    {
        title: 'Blogs',
        text: 'Find the best solution for you',
        link: '/#'
    },
    {
        title: 'Press and Release',
        text: 'Find the best solution for you',
        link: '/#'
    }
]

const ArrowIconDown = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 mt-2 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    )
}

const ArrowIconForward = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 mt-1 text-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>

    )
}


const MenuButton = ( ( { text }: MenuButtonProps ) => (
    <div className='flex flex-nowrap justify-center cursor-pointer'>
        <p>{ text }</p>
        <ArrowIconDown />
    </div>
)
)


const MenuCard = ( { items }: { items: any } ) => {
    return (
        <div className='flex flex-wrap antialiased tracking-wide'>
            {
                items && items.map( ( item: any, index: number ) => (
                    <div key={ index } className='w-6/12 py-2'>
                        <Title order={4} className='text-lg'>{ item.title }</Title>
                        <p>{ item.text }</p>
                        <Link href={ item.link } className='flex flex-nowrap text-primary text-xs md:text-sm gap-1 font-semibold'>
                            <p className='font-semibold'>Learn more</p>
                            <ArrowIconForward />
                        </Link>
                    </div>
                )
                )
            }
        </div>
    )
}


const ServicesMenu = ( props: React.ComponentPropsWithoutRef<'div'> ) => {
    return (
        <MenuCard items={ services } { ...props } />
    )
}



export { ServicesMenu, MenuButton }
