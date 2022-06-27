import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
  <div className = "flex flex-col space-y-2 p-5">
    <ul className='list-disc marker:text-teal-500'>
      <li>hi</li>
      <li>hi</li>
      <li>hi</li>
    </ul>
  </div>)
};

export default Home
