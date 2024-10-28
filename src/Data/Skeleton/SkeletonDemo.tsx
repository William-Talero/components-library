import { Skeleton } from '@/components/Skeleton';
import React from 'react';

export const SkeletonDemo = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          border: '1px solid #dfe7ef',
          borderRadius: '10px',
          padding: '1.5rem',
          backgroundColor: '#ffffff',
          width: '500px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem',
          }}
        >
          <Skeleton shape="circle" width="4rem" height="4rem" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.5rem',
              marginBottom: '1rem',
            }}
          >
            <Skeleton width="10rem" borderRadius="2rem"></Skeleton>
            <Skeleton width="5rem" borderRadius="2rem"></Skeleton>
            <Skeleton height=".5rem"></Skeleton>
          </div>
        </div>

        <Skeleton width="100%" height="150px"></Skeleton>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem',
          }}
        >
          <Skeleton width="4rem" height="2rem"></Skeleton>
          <Skeleton width="4rem" height="2rem"></Skeleton>
        </div>
      </div>
    </div>
  );
};
