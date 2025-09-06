'use client'

import { useParams } from 'next/navigation'
import React from 'react'
import rawData from '../../../../data.json'
import Image from 'next/image'
import Link from 'next/link'

// 定义卡片数据的接口
interface Card {
  id: string
  name: string
  img: string
  link: string
  description: string
}

// 定义数据部分的接口
interface Section {
  title: string
  cards: Card[]
}

type Props = {}

const Card = (props: Props) => {

    const params = useParams()
    const card_id = params.card_id   
    
    
    let cardData

    cardData = rawData.find((section: Section) => section.cards.some((card: Card) => card.id === card_id))?.cards.find((card: Card) => card.id === card_id)

  return (
    <div className='w-full min-h-screen flex justify-center bg-white mt-32'>
      <div className='flex flex-col w-2/3'>
        {/* 第一行 */}
        <div className='flex flex-row items-center justify-center gap-2'>
            <Image
                src={`/img/${cardData?.img}`}
                alt={cardData?.name || ''}
                width={100}
                height={100}
                className='rounded-lg'
            />
            <div className='flex flex-col items-start justify-center'>
                <p className='text-2xl font-bold'>{cardData?.name}</p>
                <Link href={cardData?.link || ''} className='text-sm bg-blue-500 mt-4 p-2 rounded-md text-white' target='_blank'>
                    链接直达
                </Link>
            </div>
        </div>
        {/* 描述 */}
        <div className='text-sm text-gray-500 mt-4'>
            {cardData?.description}
        </div>

        {/* 广告位 */}
        <div className='w-full h-128 bg-gray-200 rounded-lg mt-8'>
            {/* <p className='text-2xl font-bold'>广告位</p> */}
            <img src="https://picsum.photos/800/600" alt="广告位" className='w-full h-full object-cover' />
        </div>
      </div>

    </div>
  )
}

export default Card