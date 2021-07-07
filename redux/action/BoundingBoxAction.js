import {  REMOVEBOUNDINGBOX, UPDATEBOUNDINGBOX, HANDLEMOUSEUP,HANDLERESIZE } from './actionConstant'

export const createUpdateBoudingBoxAction = (payload) => ({
    type: UPDATEBOUNDINGBOX,
    payload: payload
})

export const createRemoveBoudingBoxAction = (index) => ({
    type: REMOVEBOUNDINGBOX,
    payload: index
})

export const createHandleMouseUpAction = (event,) => ({
    type: HANDLEMOUSEUP,
    payload: event
})
export const createResizeAction = () => ({
    type: HANDLERESIZE,
})