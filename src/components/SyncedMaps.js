import React, { Component } from 'react';

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet.sync';

import 'leaflet/dist/leaflet.css';
import './SyncedMaps.scss';

const DEFAULT_VIEWPORT = {
  center: [47.2254, -1.5487],
  zoom: 15,
};

const SYNC_OPTIONS = {
  syncCursor: true,
};

const syncMaps = maps => {
  maps.forEach(mapA =>
    maps.forEach(mapB => {
      if (mapA !== mapB && !mapA.isSynced(mapB)) {
        mapA.sync(mapB, SYNC_OPTIONS);
      }
    }));
};

const unsyncMaps = maps => {
  maps.forEach(mapA =>
    maps.forEach(mapB => {
      if (mapA !== mapB && mapA.isSynced(mapB)) {
        mapA.unsync(mapB);
      }
    }));
};

class Maps extends Component {
  componentDidMount () {
    syncMaps(this.mapRefs);
  }

  componentDidUpdate () {
    syncMaps(this.mapRefs);
  }

  componentWillUnmount () {
    unsyncMaps(this.mapRefs);
  }

  render () {
    this.mapRefs = [];
    const { maps, viewport, className } = this.props;

    return (
      <div className={className}>
        {maps.map(map => (
          <Map
            key={JSON.stringify(map)}
            ref={ref => { ref && this.mapRefs.push(ref.leafletElement); }}
            viewport={viewport || DEFAULT_VIEWPORT}
          >
            {map.tileLayers.map(tileLayer => (
              <TileLayer key={JSON.stringify(tileLayer)} url={tileLayer.url} />
            ))}
          </Map>
        ))}
      </div>
    );
  }
}

export default Maps;