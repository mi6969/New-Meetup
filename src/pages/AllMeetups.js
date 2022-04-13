import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-meetup-af12d-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
     return response.json();
    }).then(data => {

      const meetups = [];

      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

 

 if(isLoading) {
   return(
     <section>
       <p>Loading....</p>
     </section>
   )
 }

    return(
       <div>
          <h1>All Meetups</h1>
          <MeetupList meetups={loadMeetups} />
        
       </div>
    )
}

export default AllMeetupsPage;