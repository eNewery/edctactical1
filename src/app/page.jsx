"use client"
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
export default function Home() {
const router = useRouter();

function seeMore() {
const body = document.querySelector(".container")
const nav = document.querySelector(".nav")
const navLinks = document.querySelector(".navLinks")
body.classList.add("disappear")
  setTimeout(() => {
    router.push("/Home")
    nav.classList.add("navAfterBtn")
    navLinks.classList.add("navLinksA")
  }, 1000);
}
  return (
    <main className='mainContainer'>
      <div className="mainLandingLogo"></div>
      <div onClick={() => seeMore()} className="mainCardContainer">

        <div className="mainCardButton">
          <button id="myButton">Ver más</button>
       </div>
      </div>
    </main>
  );
}
