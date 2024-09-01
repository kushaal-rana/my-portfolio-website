import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail} from "react-icons/hi";
import { BsFillPersonalLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id:1,
      child: (
            <>
            LinkedIn <FaLinkedin size={30}/>
            </>
      ),
      href: 'https://www.linkedin.com/in/kushaal-rana/',
      style: 'rounded-tr-md'
    },
    {
      id:2,
      child: (
            <>
            Github <FaGithub size={30}/>
            </>
      ),
      href: 'https://www.github.com/kushaal-rana/',
    },
    {
      id:3,
      child: (
            <>
            Mail <HiOutlineMail size={30}/>
            </>
      ),
      href: 'mailto:ranakushaal@gmail.com',
    },
    {
      id:4,
      child: (
            <>
            Resume <BsFillPersonalLinesFill size={30}/>
            </>
      ),
      href: 'https://drive.google.com/file/d/16ZP5CcgCQ4gkRm21cv46p-SnSmhRbTXG/view?usp=sharing',
      style: 'rounded-bl-md',
      download:true,
    }
  ]
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
      
          <a href="" className="flex justify-between items-center w-full text-white">
           
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks