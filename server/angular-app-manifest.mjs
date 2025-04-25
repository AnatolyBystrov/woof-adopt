
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 716, hash: 'aa547c32ea94b7e830ab035f5baa2c3050ce7f649dc1a26f17be00d9d0f8fa44', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: 'ddb49486b04bf37ec94d8562cf8735a5034750f9e1b234168ffa6d53f7a5ba60', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PP4BLNOV.css': {size: 598, hash: '5ib/GM1duNQ', text: () => import('./assets-chunks/styles-PP4BLNOV_css.mjs').then(m => m.default)}
  },
};
