import { useQuery } from "@tanstack/react-query";

function UserProfile() {

  const {data} = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    refetchOnWindowFocus: false,

  })

  if(!data){
    alert("Data is null")
  } else {
  const {name, location, email, phone, dob, picture } = data.results[0];

  return (
    <>
    <p>Name: {name.first} {name.last}</p>
    <p>Address: {location.street.number} {location.street.name} {location.city} {location.state} {location.postcode}</p>
    <p>Email: {email}</p>
    <p>Phone Number: {phone}</p>
    <p>Date of Birth: {dob.date}</p>
    <span>
      <img src={picture.large} />
    </span>
    </>
  );  
  }
}

const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api")
    return await response.json()
  }
 
export default UserProfile;

