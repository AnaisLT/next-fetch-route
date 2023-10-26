import Link from "next/link";
import { getProjectData } from "../../utils/get-project-data";


// TO-DO: create interface or type for project list as well
// Move the types into a separate folder
type Feed = {
  device_id: string;
  gps_lat: string;
  gps_lon: string;
  timestamp: string;
};

//TO-DO: manipulate timestamp to be user friendly

export default async function Project({ params: { project } }) {
  const projectDetails = await getProjectData(project);
  const maxEntries = 10;

  return (
    <div>
      <h1>{projectDetails.source}</h1>
      <p>{projectDetails.num_of_records}</p>
      <ul>
        {projectDetails.feeds?.length > 0 &&
          projectDetails.feeds.slice(0, maxEntries).map((feed: Feed) => (
            <li key={feed.device_id}>
              <p>{feed.device_id}</p>
              <p>{feed.gps_lat}</p>
              <p>{feed.gps_lon}</p>
              <p>{feed.timestamp}</p>
            </li>
          ))}
      </ul>
      <Link href="/">Back to project list</Link>
    </div>
  );
}
