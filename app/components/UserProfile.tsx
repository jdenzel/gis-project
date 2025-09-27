import { useQuery } from "@tanstack/react-query";

function UserProfile() {

  const {data} = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  })

  return ( 
    <>
    <h1>{JSON.stringify(data)}</h1>
    </>
  );
}

const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api")
    return await response.json()
  }
 
export default UserProfile;



