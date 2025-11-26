import Link from 'next/link';
import React from 'react'
interface INavItem {
    _id:string;
  title: string;
  path: string;
}

async function NavBar() {
    const secret = process.env.URL_BASE
    const getNavBarItem =await fetch(`${secret}/api/NavBar`)
    const dataNavBarItem: INavItem[] = await getNavBarItem.json();    
  return (
    <div>
        <ul className='flex'>
            {
                dataNavBarItem.map((navItem)=>(
                    <li className='p-5' key={navItem._id}>
                        <Link href={navItem.path}>
                        {navItem.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavBar