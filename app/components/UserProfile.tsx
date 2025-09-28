import "../styles/UserProfile.css"
import { useQuery } from "@tanstack/react-query";
import tigertoothgm from "../lib/images/tigertooth-gm.png";
import Image from "next/image";
import Loader from "./Loader";

function UserProfile() {

  const {data, isFetching, refetch} = useQuery({
    queryKey: ['users'],
    queryFn: getUsers, // getUsers function called
    refetchOnWindowFocus: false,
  })

  if(isFetching) { 
      return <Loader /> // If fetch is in progress show loading component to indicate fetch is loading
  } else {

    const {name, location, email, phone, dob, picture } = data.results[0]; // destructuring data
    let dobMonth = dob.date.slice(5,7)
    let dobDay = dob.date.slice(8,10)
    let dobYear = dob.date.slice(0,4)
    let dateFormat = `${dobMonth}-${dobDay}-${dobYear}` // Formats year
    
    return (
      <div className="profile-container">
        <div className="profile-section">
          <div className="profile-box">
            <div className="profile-left">
              <img src={picture.large} />
            </div>
              
            <div className="profile-right-container">
              <div className="profile-right">
                <div className="profile-info">
                  <h3 className="info-title">Name</h3>
                  <p>{name.first} {name.last}</p>

                  <h3 className="info-title">Address</h3>

                  <p>{location.street.number} {location.street.name}, {location.city}, {location.state} {location.postcode}</p>
                  <h3 className="info-title">Email</h3>

                  <p>{email}</p>

                  <h3 className="info-title">Phone Number</h3>
                  <p>{phone}</p>

                  <h3 className="info-title">Date of Birth</h3>
                  <p>{dateFormat}</p>
                </div>
              </div>
            </div>  

            <button className="btn" onClick={() => refetch()}>Fetch User</button>
            
          </div>
          <Image className="bg-img" src={tigertoothgm} alt="Tigertooth" width={1600} height={1000}/>
        </div>
      </div>
      );  
    }
  }

const getUsers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Waiting time to make user doesn't spam fetch request causing fetch request to data to be undefined
    const response = await fetch("https://randomuser.me/api"); // Makes a get request to API
    if (!response.ok) {
      console.log("Error encountered: ", response.status);  // Logs error in console if response is not OK
    }
    return await response.json(); // response gets parsed as JSON and returned as JS object to be used in query
  }
 
export default UserProfile;