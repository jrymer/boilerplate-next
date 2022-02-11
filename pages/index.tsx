import React from 'react';
import { useQuery } from 'react-query';

const HomeView: React.FC = () => {
  const { data, error } = useQuery('home-fetch', () =>
    fetch('https://eolzcd9k101en8s.m.pipedream.net/').then((response) => response.json())
  );

  if (!data) return <>Loading</>;
  if (error) return <>{error}</>;

  return <>{data?.about}</>;
};

export default HomeView;
