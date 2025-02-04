import React from 'react'

const TopBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className='flex justify-between px-2'>
      <div><h2 className='font-bold text-2xl'>Users</h2></div>
      <div className='relative'>
        <form>
        <label for="user-search" class="text-sm font-medium sr-only">Search</label>
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="user-search" class="w-[18rem] block p-2 ps-10 text-sm border border-gray-400 rounded-full" placeholder="Search" required value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        </form>
      </div>
    </section>
  )
}

export default TopBar
