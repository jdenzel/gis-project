import { useQuery } from "@tanstack/react-query";

function UserProfile() {

  const query = useQuery({
    queryKey: ['users'],
  })

  return ( 
    <>
    <h1>Hello</h1>
    </>
   );
}
 
export default UserProfile;



