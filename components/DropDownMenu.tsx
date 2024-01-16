import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const DropDownMenu = () => {
  return (
    <div className='flex flex-col absolute top-16 right-12 border-2 border-slate-200 w-[200px] py-2 bg-slate-100'>
        <ul className=" gap-4 flex flex-col">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>

        ))}
      </ul>
      <div className="flexCenter mt-4">
        <Button 
        type='button'
        title='Login'
        icon='/user.svg'
        variant='btn_dark_green' />
      </div>
    </div>
  )
}

export default DropDownMenu