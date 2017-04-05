import React from 'react'
import FilterLink from '../todoContainer/FilterLink'

const Footer = () => (
    <p>
        show:
        {' '}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
            show_active
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPUTED">
            show_computed
        </FilterLink>
    </p>
)

export default Footer;