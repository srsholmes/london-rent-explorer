import React, {Component}from 'react'
import {GOOGLE_API_KEY} from '../constants/constants'
import GoogleApiComponent from './GoogleApiComponent'
import {Map} from './'

export const Container = (props) =>
  props.loaded
    ? (<Map className="map-container" google={props.google}/>)
    : (<div className="map-container">Google maps API loading...</div>)

export default GoogleApiComponent({apiKey: GOOGLE_API_KEY})(Container)
