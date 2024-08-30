import React from 'react';
import { useGetUserQuery } from '../../../redux/features/Auth/authApi';

const UserProfile: React.FC = () => {
  const { data, isLoading } = useGetUserQuery(undefined);


  if (isLoading) return <p>Loading...</p>;

  console.log(data?.data?.email)

  return (
    <div>
      <h1>Name:{data?.data?.name}</h1>
      <p>Email: {data?.data?.email}</p>
    </div>
  );
};

export default UserProfile;
