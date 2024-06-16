"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CustomButton from '../Button';
import classNames from 'classnames';
import { useDisclosure } from '@mantine/hooks';
import { Button, Drawer, Menu, Transition } from '@mantine/core';
import { ServicesMenu, MenuButton } from './home.menu';


const HomeNavigation = () => {
    const [ isScrolled, setIsScrolled ] = useState( false );
    const pathname = usePathname();
    const [ isOpen, { open, close } ] = useDisclosure();

    useEffect( () => {
        const handleScroll = () => {
            setIsScrolled( window.scrollY > 50 );
        };

        window.addEventListener( 'scroll', handleScroll );
        return () => {
            window.removeEventListener( 'scroll', handleScroll );
        };
    }, [] );

    // Function to close Drawer on link click
    const handleLinkClick = () => {
        close();
    };

    const toggleDrawer = () => {
        isOpen ? close() : open()
    }

    return (
        <div className={ `flex flex-nowrap justify-between p-6 fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}` }>
            <div>
                <p>3D Hitech Logo</p>
            </div>
            {/* Desktop navigation */ }
            <div className="hidden md:block text-white font-medium">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" passHref className='flex flex-nowrap px-1'>
                            <span className={ classNames( 'pb-1', { 'active-link': pathname === '/' } ) }>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" passHref className='flex flex-nowrap px-1'>
                            <span className={ classNames( 'pb-1', { 'active-link': pathname === '/who-we-are' } ) }>Who we are</span>
                        </Link>
                    </li>
                    <li>
                        <div className='flex flex-nowrap'>
                            <Menu shadow='md' withArrow={ true }>
                                <Menu.Target>
                                    <div>
                                        <MenuButton text={ "What we do" } />
                                    </div>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Item>
                                        <ServicesMenu />
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </div>
                    </li>
                    <li>
                        <Menu shadow='md' withArrow={ true }>
                            <Menu.Target>
                                <div>
                                    <MenuButton text={ "Resources" } />
                                </div>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item>
                                        <ServicesMenu />
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </li>
                </ul>
            </div>

            <div className='hidden md:block'>
                <CustomButton>Contact us</CustomButton>
            </div>

            {/* Mobile navigation */ }
            <div className="block md:hidden">
                <Transition mounted={ isOpen } transition={ 'fade' } duration={ 900 } timingFunction='ease'>
                    {
                        ( styles ) =>
                            <div style={ styles }>
                                <Drawer
                                    opened={ isOpen }
                                    onClose={ close }
                                    position="right"
                                >
                                    <div className="p-4">
                                        <ul className="space-y-4">
                                            <li onClick={ handleLinkClick }>
                                                <Link href="/" passHref className='flex flex-nowrap'>
                                                    <span className="text-lg">Home</span>
                                                </Link>
                                            </li>
                                            <li onClick={ handleLinkClick }>
                                                <Link href="/who-we-are" passHref className='flex flex-nowrap'>
                                                    <span className="text-lg">Who we are</span>\
                                                </Link>
                                            </li>
                                            <div className='flex flex-nowrap'>
                                                <Menu shadow='md' withArrow>
                                                    <Menu.Target>
                                                        <div className='flex items-center'>
                                                            <span className={ classNames( 'pb-1', { 'active-link': pathname === '/what-we-do' } ) }>What we do</span>

                                                        </div>
                                                    </Menu.Target>

                                                    <Menu.Dropdown>
                                                        <Menu.Item component={ ServicesMenu } />
                                                    </Menu.Dropdown>
                                                </Menu>
                                            </div>
                                            <li onClick={ handleLinkClick }>
                                                <Link href="/resources" passHref className='flex flex-nowrap'>
                                                    <span className="text-lg">Resources</span>

                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Drawer>
                            </div>
                    }
                </Transition>

                {
                    isOpen ? <svg onClick={ toggleDrawer } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg> : <svg onClick={ toggleDrawer } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                }
            </div>

        </div>
    );
}

export default HomeNavigation;
