/**
 *
 * Frame Redux Container
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectName, selectFormOpened } from './selectors'
import { sampleAction, updateData, updateOpenForm } from './actions'
import { compose, lifecycle, withHandlers, mapProps } from 'recompose'

import { log } from 'ruucm-util'
import { isNil, isArray, uniqueId, isString } from 'lodash'

const Frame = props => {
  let uuid = getUuid(props)
  log('props(Frame)', props)
  return (
    <div style={props.style}>
      <h1 style={{ textAlign: 'center' }}>{props.frame_id}</h1>

      {/* {React.Children.map(props.children, child =>
        React.cloneElement(child, {
          animStarted: props[uuid + '_animStarted']
            ? props[uuid + '_animStarted']
            : false,
          startAnim: props.startAnim,
        })
      )} */}

      {React.Children.map(props.children, child => {
        let newChildProps = {
          ...props,
          animStarted: props[uuid + '_animStarted']
            ? props[uuid + '_animStarted']
            : false,
          startAnim: props.startAnim, // Override Animate props

          ...child.props,
          style: child.props.style, // Override parents style prop
        }
        return isString(child.type)
          ? child
          : React.cloneElement(child, newChildProps)
      })}
    </div>
  ) // eslint-disable-line
}

const getUuid = props => {
  return props.frame_id
}

// Component redux
const mapStateToProps = (state, ownProps) => {
  let uuid = getUuid(ownProps)
  // Make Unique State Name
  var key = uuid + '_animStarted'
  log('key(mapStateToProps)', key)
  var obj = { name: selectName() }
  obj[key] = selectFormOpened(uuid)
  return createStructuredSelector(obj)
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

// Component enhancer
const enhance = compose(
  mapProps(({ children, ...rest }) => {
    return {
      frame_id: uniqueId('frame_'),
      children: children,
      ...rest,
    }
  })
)
export default enhance(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    withHandlers({
      startAnim: props => data => {
        const { dispatch, name } = props // eslint-disable-line
        let uuid = getUuid(props)
        dispatch(updateOpenForm(uuid, data))
      },
    })(Frame)
  )
)
