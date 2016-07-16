import React, {Component}from 'react'

export class Map extends Component {
  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.google !== this.props.google) this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      let zoom = 14;
      let lat = 51.515419
      let lng = -0.141099
      const center = new maps.LatLng(lat, lng);
      const mapConfig = {...{}, ...{center, zoom}}
      this.map = new maps.Map(mapRef, mapConfig);
    }
  }

  render() {
    return <div className="map" ref='map'>Loading map...</div>
  }
}
