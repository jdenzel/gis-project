import { useQuery } from "@tanstack/react-query";

function UserProfile() {

  const {data, isLoading, refetch} = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    refetchOnWindowFocus: false,

  })

  if(isLoading) {
    <p>Loading...</p>
  } else {

    const {name, location, email, phone, dob, picture } = data.results[0];
    let dobMonth = dob.date.slice(5,7)
    let dobDay = dob.date.slice(8,10)
    let dobYear = dob.date.slice(0,4)
    let dateFormat = `${dobMonth}-${dobDay}-${dobYear}`
    
    return (
        <>
          <p>Name: {name.first} {name.last}</p>
          <p>Address: {location.street.number} {location.street.name} {location.city} {location.state} {location.postcode}</p>
          <p>Email: {email}</p>
          <p>Phone Number: {phone}</p>
          <p>Date of Birth: {dateFormat}</p>
          <span>
            <img src={picture.large} />
          </span>

          <button onClick={() => refetch()}>Fetch</button>
        </>
      );  
    }
  }

const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api")
    return await response.json()
  }
 
export default UserProfile;

