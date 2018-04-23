export const ALL_LAYERS = {

  osm: { url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' },

  roads: { url: 'http://{s}.tiles.cg44.makina-corpus.net/osm/{z}/{x}/{y}.png' },

  1850: {
    url: 'http://{s}.tiles.cg44.makina-corpus.net/ortho-1850/{z}/{x}/{y}.jpg',
    options: {
      maxZoom: 16,
      tms: true,
      subdomains: 'abcdefgh',
    },
  },
  1949: {
    url: 'http://{s}.tiles.cg44.makina-corpus.net/ortho-1949/{z}/{x}/{y}.jpg',
    options: {
      maxZoom: 18,
      tms: true,
      subdomains: 'abcdefgh',
    },
  },
  1999: {
    url: 'http://{s}.tiles.cg44.makina-corpus.net/ortho-1999/{z}/{x}/{y}.jpg',
    options: {
      maxZoom: 18,
      tms: true,
      subdomains: 'abcdefgh',
    },
  },
  2004: {
    url: 'http://{s}.tiles.cg44.makina-corpus.net/ortho-2004/{z}/{x}/{y}.jpg',
    options: {
      maxZoom: 18,
      tms: true,
      subdomains: 'abcdefgh',
    },
  },
  2009: {
    url: 'http://{s}.tiles.cg44.makina-corpus.net/ortho-2009/{z}/{x}/{y}.jpg',
    options: {
      maxZoom: 18,
      tms: true,
      subdomains: 'abcdefgh',
    },
  },
  2012: {
    url: 'http://{s}.tiles.cg44.makina-corpus.net/ortho-2012/{z}/{x}/{y}.jpg',
    options: {
      maxZoom: 19,
      tms: true,
      subdomains: 'abcdefgh',
    },
  },
  2016: {
    url: 'http://{s}.tiles.cg44new.makina-corpus.net/{z}/{x}/{y}.png',
    options: {
      maxZoom: 18,
      tms: true,
      subdomains: 'abcdefgh',
    },
  },
};

export const ORTHO_LAYERS_IDS = [1850, 1949, 1999, 2004, 2009, 2012, 2016];

export default ALL_LAYERS;