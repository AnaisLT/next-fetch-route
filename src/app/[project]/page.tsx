import Link from "next/link";
import PageHero from "../../components/PageHero/PageHero"
import { getProjectData } from "../../utils/get-project-data";
import { Project, Feed } from "../types/project-types";

//TO-DO: manipulate timestamp to be user-friendly

export default async function Project({ params: { project } }) {
  const projectDetails: Project = await getProjectData(project);
  const maxEntries = 10;

  return (
    <>
      <PageHero title={projectDetails.source}/>
      <div>
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
    </>
  );
}
