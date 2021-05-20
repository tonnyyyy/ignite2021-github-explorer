import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

interface Repository {
  name: string;
  full_name: string;  
  description: string;  
  html_url: string;  
}

export function RepositoryList() {
  const [repositories, setRepositorires] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositorires(data));
  }, []);
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem
              key={repository.name}
              repository={repository}
            />
          );
        })}
      </ul>
    </section>
  );
}
