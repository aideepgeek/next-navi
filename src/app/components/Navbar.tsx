'use client'

import React from 'react'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import CategoryIcon from '@mui/icons-material/Category';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ChatIcon from '@mui/icons-material/Chat';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { useRouter } from 'next/navigation';

type Props = {}

const Navbar = (props: Props) => {

    const router = useRouter()

    const handleClick = (text: string) => {
        if (window.location.pathname === '/') {
            const element = document.getElementById(text)
            element?.scrollIntoView({behavior: 'smooth'})
        } else {
            router.push(`/`)
            setTimeout(() => {
                const element = document.getElementById(text)
                element?.scrollIntoView({behavior: 'smooth'})
            }, 300)
        }
    }

  return (
    <div className='h-screen bg-slate-300 flex flex-col items-center gap-4'> 
        <div className='mt-6 w-3/4 h-full flex flex-col gap-8'>
            {/* logo */}
            <div 
                className='flex items-center gap-2'
                onClick={() => handleClick('/')}
            >
                <CategoryIcon className='h-10 w-10 bg-white rounded-full p-1' />
                <p className='text-2xl font-bold'>AI导航站</p>
            </div>
            {/* menu */}
            <div className='flex flex-col items-center justify-center w-3/4 gap-6'>
                    {/* 第一行 */}
                    <div
                        className='flex w-full h-10 items-center gap-4 cursor-pointer'
                        onClick={() => handleClick('AI热门工具')}
                    >
                        <WhatshotIcon />
                        <p className='tracking-widest'>AI热门工具</p>
                    </div>


                    <div
                        onClick={() => handleClick('AI对话聊天')}
                        className='flex w-full h-10 items-center gap-4 cursor-pointer'
                    >
                        <ChatIcon />
                        <p className="tracking-widest">AI对话聊天</p>
                    </div>

                    <div
                        onClick={() => handleClick('AI文本工具')}
                        className='flex w-full h-10 items-center gap-4 cursor-pointer'
                    >
                        <EditNoteIcon />
                        <p className="tracking-widest select-none">AI文本工具</p>
                    </div>

                    <div
                        onClick={() => handleClick('AI编程工具')}
                        className='flex w-full h-10 items-center gap-4 cursor-pointer'
                    >
                        <CodeIcon />
                        <p className="tracking-widest select-none">AI编程工具</p>
                    </div>

                    <div
                        className='flex w-full h-10 items-center gap-4 cursor-pointer'
                        onClick={() => handleClick('AI绘画')}
                    >
                        <BrushIcon />
                        <p className="tracking-widest select-none">AI绘画</p>
                    </div>

                    <div
                        className='flex w-full h-10 items-center gap-4 cursor-pointer'
                        onClick={() => handleClick('AI新闻')}
                    >
                        <AnnouncementIcon />
                        <p className="tracking-widest select-none">AI新闻</p>
                    </div>

                    <div
                        className='flex w-full h-10 items-center gap-4 cursor-pointer'
                        onClick={() => handleClick('大模型API')}
                    >
                        <DeviceHubIcon />
                        <p className="tracking-widest select-none">大模型API</p>
                    </div>

                    <div
                        className='flex w-full h-10 items-center gap-4 cursor-pointer'
                        onClick={() => handleClick('Agent工具')}
                    >
                        <PsychologyAltIcon />
                        <p className="tracking-widest select-none">Agent工具</p>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default Navbar