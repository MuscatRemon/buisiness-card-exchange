import { IconButton, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";

type Props = {
  github_id: string;
};

export const LinkGithub = (props: Props) => {
  const { github_id } = props;

  return (
    <Link href={`https://github.com/${github_id}`} target="_blank">
      <IconButton as="div" aria-label="github">
        <FaGithub />
      </IconButton>
    </Link>
  );
};
