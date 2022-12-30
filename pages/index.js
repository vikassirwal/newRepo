import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Qrscanner from './qrscanner';
import StudentInfoCard from './studentInfoCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isModalSet, setModalFunc] = useState(false);
  const [studentName, setStudentname] = useState('');

  useEffect(() => {
    console.log('isModalSet->', isModalSet)
  },[isModalSet])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        <div className={styles.descriptionOne}>
        <p>QR Attendance Tracker</p>
        </div>
          <Qrscanner setStudentname={setStudentname} setModalFunc={setModalFunc}/>
          <StudentInfoCard studentName={studentName} setModalFunc={setModalFunc} isModalSet={isModalSet}/>
        </div>

      </main>
    </>
  )
}
