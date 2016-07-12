import React, {Component}from 'react'
import {GOOGLE_API_KEY} from '../constants/constants'
import GoogleApiComponent from './GoogleApiComponent'
import { Map } from './'

export const Container = (props) => {
  if (!props.loaded) return <div className="map-container">API loading...</div>
  return <Map className="map-container" google={props.google}/>
}
export default GoogleApiComponent({apiKey: GOOGLE_API_KEY})(Container)
