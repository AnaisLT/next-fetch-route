import PageHero from "@/components/PageHero/PageHero";
import * as Card from "@/components/Card/Card";
import { getProjectList } from "../utils/get-project-list";
import styles from "./page.module.css";

const { projectCard, main, description, cardContainer } = styles;

export default async function Home() {
  const data: string = await getProjectList();
  const projectList: string[] = data?.trim().split("\n");

  return (
    <div>
      <PageHero title="Project List" />
      <main className={main}>
        <div className={description}>
          <ul className={cardContainer}>
            {projectList?.map((project) => (
              <Card.Root className={projectCard} key={project}>
                <Card.Title href={`/${project}`}>
                  {project}
                </Card.Title>
              </Card.Root>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
