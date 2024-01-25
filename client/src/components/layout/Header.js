import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "../ui/NavigationMenu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
  

function Header() {
    return (
        <div className='flex gap-x-4 items-center h-20 border-b-2 border-black p-2'>
            <div className='h-full w-24 p-4 flex items-center justify-center border-2 border-black rounded-md'>
                <a href='/' className='h-full'>
                    <FontAwesomeIcon icon={faCameraRetro} className='h-full'/>
                </a>
            </div>
            <div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='text-lg'>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li>
                                        <NavigationMenuLink
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        >
                                            Mooie link jajajaja
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        >
                                            Link 2
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href='#'>
                                <NavigationMenuLink className='text-lg'>Item Two</NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

export default Header