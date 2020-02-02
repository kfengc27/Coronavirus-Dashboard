import { lazy } from 'react';

export const Data = {
  path: '/data',
  title: 'Data',
  component: lazy(() => import(/* webpackChunkName: "data" */ './Data')),
};

export const Timeline = {
  path: '/timeline',
  title: 'Timeline',
  component: lazy(() =>
    import(/* webpackChunkName: "timeline" */ './Timeline'),
  ),
};

export const Faq = {
  path: '/faq',
  title: 'FAQ',
  component: lazy(() => import(/* webpackChunkName: "faq" */ './FAQ')),
};

export const Prevention = {
  path: '/prevention',
  title: 'Prevention',
  component: lazy(() =>
    import(/* webpackChunkName: "prevention" */ './Prevention'),
  ),
};

export const Wiki = {
  path: '/wiki',
  title: 'Wiki',
  component: lazy(() => import(/* webpackChunkName: "wiki" */ './Wiki')),
};

export const Map = {
  path: '/map',
  title: 'Map',
  component: lazy(() => import(/* webpackChunkName: "map" */ './Map')),
};

export const About = {
  path: '/about',
  title: 'About',
  component: lazy(() => import(/* webpackChunkName: "about" */ './About')),
};
