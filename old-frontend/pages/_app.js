import '../styles/globals.css';
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg';
import SearchBar from '../components/SearchBar';
import React from 'react';
import { data } from '../test/MOCK_DATA.json';

function Marketplace({ Component , pageProps }) {
  return (
    <div >
      <Head>
        <title>Openchain Marketplace</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <nav className="p-2 bg-white-500">
        <div className="grid grid-flow-row">
          <div className="flex justify-end">
            <Link href="/Metamask">
              <a className="px-4 py-1 mr-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Metamask
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <a className="rounded-full p-2 mr-4 bg-white-300 h-10 w-10 shadow-md blur-sm subpixel-antialiased self-center border border-purple-200 hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                <div>
                  <Image src={logo} alt="Picture of logo" width="400px" height="400px"/>
                </div>
              </a>
            </Link>
            <Link href="/create-item">
              <a className="px-4 py-1 mr-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 shadow-md blur-sm subpixel-antialiased">
                Sell Digital Asset
              </a>
            </Link>
            <Link href="/my-assets">
              <a className="px-4 py-1 mr-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 shadow-md blur-sm subpixel-antialiased">
                My Digital Assets
              </a>
            </Link>
            <Link href="/creator-dashboard">
              <a className="px-4 py-1 mr-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 shadow-md blur-sm subpixel-antialiased">
                Creator Dashboard
              </a>
            </Link>
            {/* Search Bar */}
              <a className="px-4 py-1 mr-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 shadow-md blur-sm subpixel-antialiased">
              {/* <input id="search" onKeyUp={Search} type="text"
                 name={id.value} placeholder="Search nft.." /> */}
                <SearchBar placeholder="Enter an NFT Name..." data={data} />
              </a>
          </div>
        </div>
      </nav>
      <div className="flex justify-center bg-blue-300 shadow-sm blur-sm subpixel-antialiased self-center">
        <div className="w-1/2 flex flex-col pb-2">
          <Image src={logo} alt="Picture of logo" width="400px" height="400px"/>
        </div>
      </div>
     
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace