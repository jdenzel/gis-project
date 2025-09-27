import { useQuery } from "@tanstack/react-query";

function UserProfile() {

  const {data} = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  })

  if(!data){
    alert("Data is null")
  } else {
  const {name, location, email, phone, dob, picture } = data.results[0];

  return (
    <>
    <p>Name: {name.first} {name.last}</p>
    <h1>{JSON.stringify(data)}</h1>
    </>
  );  
  }
  
}

const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api")
    return await response.json()
  }
 
export default UserProfile;

