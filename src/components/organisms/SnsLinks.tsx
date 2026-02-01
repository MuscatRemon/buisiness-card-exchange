import { Flex } from "@chakra-ui/react";
import { LinkX } from "../molecules/snsLink/LinkX";
import { LinkQiita } from "../molecules/snsLink/LinkQiita";
import { LinkGithub } from "../molecules/snsLink/LinkGithub";

type Props = {
  x_id?: string;
  qiita_id?: string;
  github_id?: string;
};

export const SnsLinks = (props: Props) => {
  const { x_id, qiita_id, github_id } = props;

  return (
    <Flex gap={4}>
      {x_id && <LinkX x_id={x_id} />}
      {qiita_id && <LinkQiita qiita_id={qiita_id} />}
      {github_id && <LinkGithub github_id={github_id} />}
    </Flex>
  );
};
