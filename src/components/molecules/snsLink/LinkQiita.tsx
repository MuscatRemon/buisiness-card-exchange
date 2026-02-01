import { IconButton, Link } from "@chakra-ui/react";
import { SiQiita } from "react-icons/si";

type Props = {
  qiita_id: string;
};

export const LinkQiita = (props: Props) => {
  const { qiita_id } = props;

  return (
    <Link href={`https://qiita.com/${qiita_id}`} target="_blank">
      <IconButton as="div" aria-label="qiita" bg="#59bb0c">
        <SiQiita />
      </IconButton>
    </Link>
  );
};
