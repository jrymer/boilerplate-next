import React from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';

const Link = styled('div')`
  cursor: pointer;
  width: 60px;
`;

interface Props {
  displayText: string;
  to: string;
}

const StyledLink: React.FC<Props> = ({ displayText, to }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(to);
  };

  return <Link onClick={handleClick}>{displayText}</Link>;
};

export default StyledLink;
