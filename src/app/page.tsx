'use client'

import Image from "next/image";
import { useState } from "react";

import rawData from '../../data.json'
import Link from "next/link";


export default function Home() {

  const [search, setSearch] = useState('')
  const [data, setData] = useState(rawData)

  const handleSearch = () => {
    let filteredData = []
    for (const section of rawData) {
      if (!section.cards.some((card: any) => card.name.toLowerCase().includes(search.toLowerCase()))) {
        continue
      }

      const filteredCards = section.cards.filter((card: any) => card.name.toLowerCase().includes(search.toLowerCase()))

      filteredData.push({
        ...section,
        cards: filteredCards
      })

      setData(filteredData)
    }
  }
  return (
    <div className="h-min-screen w-full scroll-auto">
      {/* 搜索栏 */}
      <div className="w-full h-64 flex flex-col justify-center items-center">
        <p>搜索本站内容</p>
        <div className="flex flex-row justify-center items-center w-3/4 mt-2 gap-2">
          <input
            className="w-1/2 h-10 rounded-md border-2 border-gray-300 p-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button 
            className="h-10 rounded-md bg-blue-500 text-white px-4"
            onClick={handleSearch}
          >
            搜索
          </button>
        </div>
      </div>

      {/* 热门工具 */}
      <div>
        {
          data.map((section: any) => (
            <div
              className="w-full flex flex-col"
              id={section.title}
              key={section.title}
            >
              <p
                className="text-2xl font-bold mt-4 ml-4"
              >
                {section.title}
              </p>
              <div className="flex flex-row w-full flex-wrap">
                {/* 一张卡片 */}
                {
                  section.cards.map((card: any) => (
                    <Link
                      href={`/card/${card.id}`}
                      className="h-32 w-full sm:1/2 lg:w-1/5 p-4"
                      key={card.id}
                    >
                      <div className="h-full w-full bg-white rounded-lg flex flex-row flex-wrap items-center">
                        <div className="w-2/5 flex items-center justify-center">
                          <Image
                            src={`/img/${card.img}`}
                            alt={card.name}
                            width={60}
                            height={60}
                            className="rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col w-3/5 p-2">
                          <p className="text-xs lg:text-lg font-bold line-clamp-1">
                            {card.name}
                          </p>
                          <p className="text-xs lg:text-sm line-clamp-2 text-gray-500">
                            {card.description}
                          </p>
                        </div>


                        </div>

                    </Link>
                  ))
                }
              </div>

            </div>

          ))
        }
      </div>

      
    </div>
  );
}
