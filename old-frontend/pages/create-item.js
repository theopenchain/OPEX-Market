import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import Image from 'next/image';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {
  nftaddress, nftmarketaddress
} from '../config'

import NFT from '../contractABIs/NFT.sol/NFT.json'
import Market from '../contractABIs/Market.sol/NFTMarket.json'

export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })

  {/* for test purposes AUDIO file in Metadata */}
  const [audioFileUrl, setAudioFileUrl] = useState(null)

  const router = useRouter()

  {/* for test purposes AUDIO file in Metadata */}
  async function onChangeAudioFile(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setAudioFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  async function createMarket() {
    const { name, description, price } = formInput
    {/* for test purposes AUDIO file in Metadata: remove audioFileUrl if tests unsuccessful */}
    // removed audioFileURL due to inability to upload. After removal, upload process continued smoothly with both audio and graphic NFT's. (|| !audioFileURL) 
    if (!name || !description || !price || !fileUrl) return 
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name, description, image: fileUrl, audio: audioFileUrl
    })
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      createSale(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }

  async function createSale(url) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
    
    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait()
    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()

    const price = ethers.utils.parseUnits(formInput.price, 'ether')
  
    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()

    transaction = await contract.createMarketItem(nftaddress, tokenId, price, { value: listingPrice })
    await transaction.wait()
    router.push('/')
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input 
          placeholder="Name your creation!"
          className="px-4 py-4 mr-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 shadow-md blur-sm subpixel-antialiased"
          onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
        />
        <textarea
          placeholder="Describe your creation!"
          className="px-4 py-4 mr-4 text-sm text-purple-600 font-semibold rounded-full border border-gray-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 shadow-md blur-sm subpixel-antialiased"
          onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
        />
        <input
          placeholder="How much ETH per creation?"
          className="px-4 py-4 mr-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 shadow-md blur-sm subpixel-antialiased"
          onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
        />
        <input
          placeholder="What type of NFT is this?"
          className="px-4 py-4 mr-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 shadow-md blur-sm subpixel-antialiased"
          onChange={e => updateFormInput({ ...formInput, category: e.target.value })}
        />
        <input
          type="file"
          name="Asset"
          className="my-4"
          onChange={onChange}
          required="YOU MUST PLACE AN IMAGE!" //added required? to ensure users have an image with an audio upload.
        />
        {/* for test purposes AUDIO file in Metadata */}
        <input
          type="file"
          name="AudioFile"
          className="my-4"
          onChange={onChangeAudioFile}
        />
        {
          fileUrl && (
            <Image className="rounded mt-4" src={fileUrl} alt="description of image" width={400} height={400}/>
          )
        }
        {
          audioFileUrl && (
            <audio className="rounded mt-4" width="200" src={audioFileUrl} controls/>
          )
        }
        <button onClick={createMarket} className="font-bold mt-4 bg-purple-600 text-white rounded p-4 shadow-lg">
          Create NFT!
        </button>
      </div>
    </div>
  )
}