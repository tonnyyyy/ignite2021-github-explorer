interface RepositoryItemProps {
  repository: {
    name: string;
    full_name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>Full name: {props.repository.full_name}</p>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Repository link</a>
    </li>
  );
}
