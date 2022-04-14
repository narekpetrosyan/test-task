import React from 'react';

export const ROUTE_LIST = [
  {
    url: '/',
    exact: true,
    component: React.lazy(() =>
      import('../pages/main/main').then(({ Main }) => ({
        default: Main,
      })),
    ),
  },
  {
    url: '/favorites',
    component: React.lazy(() =>
      import('../pages/favorite/favorite').then(({ Favorite }) => ({
        default: Favorite,
      })),
    ),
  },
];
