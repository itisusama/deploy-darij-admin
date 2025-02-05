import React, {useState} from 'react'
import TopBar from './UsersItems/TopBar'
import UsersTable from './UsersItems/UsersTable'

const UsersManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <TopBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <UsersTable/>
      {/* searchQuery={searchQuery} */}
    </div>
  )
}

export default UsersManagement
