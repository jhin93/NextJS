import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (    
    // 배경 이미지 삽입
    <div className="dark:md:hover:bg-teal-400 bg-[url('/vercel.svg')]"> 
      <h2 className="text-[200px] text-[#000]">
        Hello
      </h2>
    </div>
  )
};

export default Home
