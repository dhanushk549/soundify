"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Mail, } from 'lucide-react';
import { } from "../app/components/ui/sparkles";
import Link from "next/link";
import { FloatingNavDemo } from "@/components/ui/FloatingNavDemo";
import { TailwindcssButtons } from "@/components/ui/TailwindcssButtonsDemo";
import { LayoutTextFlipDemo } from "@/components/ui/LayoutTextFlipDemo";
import { motion } from "motion/react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { WavyBackgroundDemo } from "@/components/ui/WavyBackgroundDemo";
import { SpinningTextBasicdemo } from "@/components/ui/SpinningTextBasicdemo";


export default function Home() {
  return (
    <>
      <FloatingNavDemo />
      {/* <TailwindcssButtons/> */}
      {/* <LayoutTextFlipDemo/> */}



      {/* Hero Section */}
      <section id="home" className=" grid grid-cols-2   px-10 mx-50  item-center">

        <div className="  col-span-2" >

          <div>
            <motion.div className="relative ml-24 mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
              <LayoutTextFlip
                text="WELCOME TO"
                words={["RADIO ROOM📻", "MUSIC WORLD🎧", "BEATS CENTER🥁", "MUSIC PLAY🎤"]}
              />
            </motion.div>



            <div className=" flex pt-3 justify-center gap-5">

              <button className="relative  shadow-[-2px_2px_3px] shadow-white inline-flex  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex  cursor-pointer items-center justify-center rounded-full bg-gray-600 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  View Song
                </span>
              </button>


              <button className="relative  shadow-[-2px_2px_3px] shadow-white inline-flex  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex  cursor-pointer items-center justify-center rounded-full bg-gray-600 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  Playlist
                </span>
              </button>
            </div>
          </div><br />

          <p className=" text-white font-semibold mb-8 fon3-mono">
            Welcome to Music Play, your space for discovering fresh tracks, exploring curated playlists, and enjoying seamless streaming anytime. Dive into powerful beats, calming melodies, and everything between. Experience music crafted for your mood, style, and daily moments every single day. repellendus.
          </p>
        </div>

        <div className=" " >
          <div className="  relative hover:z-20 mx-6 shadow-[-5px_5px_4px]  shadow-gray-800 rounded-2xl">
            <div className="w-[350px] h-[250px]  rounded-xl border-0 p-5 text-gray-800 "
              style={{
                backgroundImage: "url('photo2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <h1 className="  animate-pulse text-4xl font-bold mb-4">songs🎵</h1>
              <p className=" mb-8">
                3                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum eius dolorem, dolore optio natus quas repellendus.
              </p>
              <button className="relative animate-bounce  shadow-[-2px_2px_3px] shadow-white inline-flex  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex  cursor-pointer items-center justify-center rounded-full bg-gray-600 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  View Song
                </span>
              </button>
            </div>
          </div>




        </div>

        <div>
          <div className=" z-10  mx-5  shadow-[-5px_2px_4px] shadow-amber-100 rounded-2xl ">
            <div className="w-[350px] h-[250px]  rounded-xl border-0 p-5 text-amber-100"
              style={{
                backgroundImage: "url('limg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <h1 className="  animate-pulse text-4xl font-bold mb-4">Playlist🎧</h1>
              <p className=" mb-8">
                3                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum eius dolorem, dolore optio natus quas repellendus.
              </p>
              <button className="relative animate-bounce  shadow-[-2px_2px_3px] shadow-white inline-flex  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex  cursor-pointer items-center justify-center rounded-full bg-gray-600 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  Playlist
                </span>
              </button>
            </div>
          </div>
        </div>


      </section>



      {/* youtube  */}
      <section id="playlist" className="grid grid-cols-3 mt-7 py-12 mx-8 gap-4 ">

        
          <iframe width="400" height="250" className="rounded-xl border-0  " src="https://www.youtube.com/embed/6LD30ChPsSs?si=9nj47dLy2oqB9hKD" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/k9_JbEaRxso?si=3_IvVxgJ-aNzVezq" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/3Lc-96oH__s?si=lY1Mbp5CuWR7IZlU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/KgpnfT5bgLY?si=izZmVKKtR2hPMQmu" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/v0pXMxU87JQ?si=_UHkaImXzoBFzjZ3" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/xpWqfS8Su_Y?si=qf8dBVAZFvwMJfNm" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/KgpnfT5bgLY?si=izZmVKKtR2hPMQmu" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/3Lc-96oH__s?si=lY1Mbp5CuWR7IZlU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/v0pXMxU87JQ?si=_UHkaImXzoBFzjZ3" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/xpWqfS8Su_Y?si=qf8dBVAZFvwMJfNm" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/KgpnfT5bgLY?si=izZmVKKtR2hPMQmu" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/3Lc-96oH__s?si=lY1Mbp5CuWR7IZlU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/v0pXMxU87JQ?si=_UHkaImXzoBFzjZ3" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/xpWqfS8Su_Y?si=qf8dBVAZFvwMJfNm" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="400" height="250" className="rounded-xl border-0 " src="https://www.youtube.com/embed/ckwRhLE9_LY?si=vOdeBEdualYuIS0Y" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>



      </section>

      {/* About */}




      {/* About Section with Wavy Background */}
      <section id="about" className="relative  flex items-center " >
        <WavyBackgroundDemo />

        <div className=" z-1 grid grid-cols-3 gap-10 px-20">
          <div
            className="w-[250px] h-[230px] rounded-xl border-0 p-5 text-gray-800"
            style={{
              backgroundImage: "url('ab12.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-white text-3xl my-27 mx-55  font-extrabold mb-5  first-letter:text-yellow-400 first-letter:font-bold first-letter:text-4xl ">M𝖚𝖘𝖎𝖈♬</h1>

          </div>

          <div
            className="w-[250px] h-[230px] rounded-xl border-0 p-5 text-gray-800"
            style={{
              backgroundImage: "url('abtimg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-black text-3xl my-12 mx-12 font-extrabold mb-5">𝓐𝓑𝓞𝓤𝓣</h1>

          </div>

          <div className="text-white">
            <h1 className="text-3xl font-extrabold">𝑵𝑶𝑻𝑬:</h1>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat
              aliquid sunt mollitia rerum quidem cum laborum odit doloribus ut.
            </p>
            <br />

            <div className="flex gap-5">
              <button className="relative shadow-[-2px_2px_3px] shadow-white inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex cursor-pointer items-center justify-center rounded-full bg-gray-600 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  View Song
                </span>
              </button>

              <button className="relative shadow-[-2px_2px_3px] shadow-white inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex cursor-pointer items-center justify-center rounded-full bg-gray-600 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  Playlist
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* contact */}

      <section id="contact" className="px-[25%] py-20   ">
        <h1 className="text-5xl font-semibold text-start uppercase">Contact us:</h1>
        <form action="#" className="mt-16 grid grid-cols-2 gap-10 ">
          <input type="text" placeholder=" Enter Name" className="border-3 shadow-[-10px_10px_4px] shadow-white   text-white rounded-2xl px-8 py-3" />
          <input type="text" placeholder="Enter Email" className="border-3 shadow-[-10px_10px_4px] shadow-white    text-white rounded-2xl px-8 py-3" />
          <input type="text" placeholder=" Enter Message" className=" col-span-2 border-3 shadow-[-10px_10px_4px] shadow-white h-35    text-white rounded-2xl px-8 py-3" />
          
          <button className="px-12 py-4 rounded-full bg-[#377b60] shadow-[-10px_10px_4px] shadow-gray-400 font-bold bg-gray-800 text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#377b60] transition-colors duration-200">
            Submit
          </button>

        </form>
      </section>

      {/* fotter */}

      <footer className="px-[10%] py-8    backdrop-blur-lg  ">
        <div className="grid grid-cols-4">
          <SpinningTextBasicdemo />

          <div>
            <h1 className=" text-4xl font-extrabold text-black">MUSIC-PLAY</h1><br />
            <p className=" font-semibold  text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="mx-7">
            <h1 className="text-2xl font-extrabold text-black">SHORT LINKS</h1><br />
            <ul className="font-semibold  text-white underline">
              <li className="hover:text-yellow-400"><Link href="">SONGS ⮵</Link></li>
              <li className="hover:text-yellow-400"><Link href="">CONTACT ⮵</Link></li>
              <li className="hover:text-yellow-400"><Link href="">TERMS & CONDITIONS⮵</Link></li>
              <li className="hover:text-yellow-400"><Link href="">PRIMARY POLICY ⮵</Link></li>
            </ul>
          </div>

          <div className=" ">
            <h1 className="text-2xl  font-extrabold text-black">SOCIAL LINKS</h1><br />
            <div className="py-3 text-white flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-blue-700" />
              <Twitter className="w-6 h-6 hover:text-black" />
              <Instagram className="w-6 h-6 hover:text-pink-700" />
              <Youtube className="w-6 h-6 hover:text-red-700" />
              <Mail className="w-6 h-6 hover:text-black" />
            </div>
          </div>
        </div>


        <div className="text-center text-xl border-0 font-semibold text-white mt-6">
          © 2025 Music Player.
        </div>
      </footer>



    </>
  );
}