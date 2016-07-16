import React from 'react'
import {ScriptCache} from '../modules/ScriptCache'
import {GoogleApi} from '../modules/googleApi'

const createCache = options =>
  ScriptCache({
    google: GoogleApi({
      apiKey: options.apiKey,
      libraries: options.libraries || ['places']
    })
  });

export const wrapper = (options) => (WrappedComponent) => {
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
