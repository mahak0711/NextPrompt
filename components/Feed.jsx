'use client'
import {useState,useEffect} from 'react'

import PromptCard from './PromptCard'

const PromptCardList=({
  data,handletagClick
})=>{
  <div className='mt-16 prompt_layout'>
    {data.map((post)=>{
      <PromptCard
      key={post._id}
      post={post}
      handletagClick={handletagClick}
      />
    })}
  </div>
}

const Feed = () => {
  const [searchText,setSearchText]=useState('');
  const handleSearchChange=(e)=>{
    setSearchText(e.target.value);
  }
  const [post,setPosts]=useState([]);

   useEffect(()=>{
    const fetchPost=async()=>{
      const response=await fetch('api/prompt');
      const data=await response.json();

      setPosts(data);
    }
    fetchPost();
   },[]); 

  return (
    <section className='feed'>
      <form className='relative w-full flex-center '>
        <input type='text' 
        placeholder='Search for a tag or username'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
        />
      </form>
      <PromptCardList
      data={post}
      handletagClick={()=>{}}
      />
    </section>
  )
}

export default Feed
