/**
 * Frame Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import { log } from 'ruucm-util'

import { SAMPLE_ACTION, START_ANIM } from './constants'

/**
 * Sample action description
 *
 * @param  {name} name param description
 *
 * @return {object} An action object with a type of SAMPLE_ACTION
 */
export function sampleAction(name) {
  return {
    type: SAMPLE_ACTION,
    name,
  }
}
export function updateData(name) {
  return {
    type: SAMPLE_ACTION,
    name,
  }
}
export function updateOpenForm(id, data) {
  log('updateOpenForm')
  log('id', id)
  log('data')
  log(data)
  return {
    type: `${START_ANIM}/${id}`,
    id: id,
    data,
  }
}
