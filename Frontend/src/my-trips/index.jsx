import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";
import SkeletonCard from "./components/SkeletonCard"; // Import Skeleton

function MyTrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  useEffect(() => {
    GetUserTrips();
  }, []);

  /**
   * Fetches ALL User Trips
   */
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/");
      return;
    }

    setLoading(true); // ✅ Start loading before fetching data
    const q = query(collection(db, "AITrips"), where("userEmail", "==", user?.email));

    const querySnapshot = await getDocs(q);
    const tripsArray = [];

    querySnapshot.forEach((doc) => {
      tripsArray.push(doc.data());
    });

    setUserTrips(tripsArray);
    setLoading(false); // ✅ Stop loading after fetching data
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>

      {loading ? ( 
        <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
          {/* Show Skeleton Loaders */}
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : userTrips.length > 0 ? (
        <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
          {userTrips.map((trip, index) => (
            <UserTripCardItem key={index} trip={trip} />
          ))}
        </div>
      ) : (
        <p>No trips found.</p>
      )}
    </div>
  );
}

export default MyTrips;
