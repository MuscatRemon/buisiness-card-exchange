import { IconButton, Link } from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";

type Props = {
  x_id: string;
};

export const LinkX = (props: Props) => {
  const { x_id } = props;

  return (
    <Link href={`https://x.com/${x_id}`} target="_blank">
      <IconButton as="div" aria-label="x">
        <FaXTwitter />
      </IconButton>
    </Link>
  );
};
