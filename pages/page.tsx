import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
    <p style="background-image: url('img_girl.jpg');">
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </p>
    </>
  );
}