import Link from "next/link";
import PageHero from "../../components/PageHero/PageHero";
import * as Card from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";
import { getProjectData } from "../../utils/get-project-data";
import { Project, Feed } from "../types/project-types";
import styles from "./page.module.css";

//TO-DO: create function to make timestamp to be user-friendly

const { cardContainer, backButton, previousPage } = styles;

export default async function Project({ params: { project } }) {
  const projectDetails: Project = await getProjectData(project);
  const maxEntries = 10;

  return (
    <div>
      <PageHero
        title={projectDetails.source}
        subtitle={`${projectDetails.num_of_records} records`}
      />
      <ul className={cardContainer}>
        {projectDetails.feeds?.length > 0 &&
          projectDetails.feeds.slice(0, maxEntries).map((feed: Feed) => (
            <Card.Root key={feed.device_id}>
              <Card.Content>
                <p>Device: {feed.device_id}</p>
                <p>Latitude: {feed.gps_lat}</p>
                <p>Longitude: {feed.gps_lon}</p>
                <p>Time of Entry: {feed.timestamp}</p>
              </Card.Content>
            </Card.Root>
          ))}
      </ul>
      <Button className={backButton}>
        <Link className={previousPage} href="/">Back to project list</Link>
      </Button>
    </div>
  );
}
