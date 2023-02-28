const url = process.env.REACT_APP_URI_USERS

async function fetchUsers() {
   try {
      const resp = await fetch(process.env.REACT_APP_URI_USERS)
      const data = resp.json() 
      return data
   } catch (error) {
      return error.name
   } 
}

export default fetchUsers