import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return <div className = "flex flex-col space-y-2 p-5">
      <details>
        <summary>What is my favorite food</summary>
        <span>김치</span>
      </details>
  </div>
};

export default Home
