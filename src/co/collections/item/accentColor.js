import React from 'react'
import { connect } from 'react-redux'
import { makeCollection } from '~data/selectors/collections'

const emptyObj = {}

export default connect(
	() => {
        const getCollection = makeCollection()
    
        return (state, { _id })=>{
            const { color } = getCollection(state, _id)

            return {
                color,
                theme: state.local.theme
            }
        }
    }
)(function CollectionAccentColor({ color, theme, children }) {
    return children(theme=='night' ? emptyObj : { '--accent-color': color })
})