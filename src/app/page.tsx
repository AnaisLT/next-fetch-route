import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getProjectList } from "../utils/get-project-list";
import styles from "./page.module.css";

export default async function Home() {
  const data: string = await getProjectList();
  const projectList: string[] = data?.trim().split("\n");

  return (
    <div>
      <PageHero className={styles.pageHero} title="Project List" />
      <main className={styles.main}>
        <div className={styles.description}>
          <ul>
            {projectList?.map((project) => (
              <Link href={`/${project}`} key={project}>
                {project}
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
