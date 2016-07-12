import React, {PropTypes as T} from 'react'
import {ScriptCache} from '../modules/ScriptCache'
import {GoogleApi} from '../modules/googleApi'

const defaultMapConfig = {}
const defaultCreateCache = (options) => {
  options = options || {};
  const apiKey = options.apiKey;
  const libraries = options.libraries || ['places'];
  return ScriptCache({
    google: GoogleApi({apiKey: apiKey, libraries: libraries})
  });
};

export const wrapper = (options) => (WrappedComponent) => {
  const apiKey = options.apiKey;
  const libraries = options.libraries || ['places'];
  const createCache = options.createCache || defaultCreateCache;

  class Wrapper extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.scriptCache = createCache(options);
      this.scriptCache.google.onLoad(this.onLoad.bind(this))

      this.state = {
        loaded: false,
        map: null,
        google: null
      }
    }

    onLoad() {
      this._gapi = window.google;
      this.setState({loaded: true, google: this._gapi})
    }

    render() {
      const props = { ...this.props, ...{loaded: this.state.loaded, google: window.google}};
      return (
        <div>
          <WrappedComponent {...props}/>
          <div ref='map'/>
        </div>
      )
    }
  }
  return Wrapper;
}

export default wrapper;