import "../styles/UserProfile.css"
import { useQuery } from "@tanstack/react-query";
import tigertoothgm from "../lib/images/tigertooth-gm.png";
import Image from "next/image";

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
      <div className="profile-container">
        <div className="profile-section">
          <div className="profile-box">
            <div className="profile-left">
              <img src={picture.large} />
            </div>
              
            <div className="profile-right">
              <div className="profile-info">
                <h3 className="info-title">Name</h3>
                <p>{name.first} {name.last}</p>

                <h3 className="info-title">Address</h3>

                <p>{location.street.number} {location.street.name}, {location.city}, {location.state} {location.postcode}</p>
                <h3 className="info-title">Email:</h3>

                <p>{email}</p>

                <h3 className="info-title">Phone Number</h3>
                <p>{phone}</p>

                <h3 className="info-title">Date of Birth</h3>
                <p>{dateFormat}</p>
              </div>
            </div>

            <button className="btn" onClick={() => refetch()}>Fetch New User</button>
            
          </div>
        </div>
        <Image className="bg-img" src={tigertoothgm} alt="Tigertooth" />
      </div>
      );  
    }
  }

const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api")
    return await response.json()
  }
 
export default UserProfile;