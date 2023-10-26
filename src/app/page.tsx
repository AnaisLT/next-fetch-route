import Link from "next/link";
import { getProjectList } from "../utils/get-project-list";
import styles from "./page.module.css";

export default async function Home() {
  const data: string = await getProjectList();
  const projectList: string[] = data?.trim().split("\n");

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Project List</h1>
        <ul>
          {projectList?.map((project) => (
            <Link href={`/${project}`} key={project}>
              {project}
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
}
