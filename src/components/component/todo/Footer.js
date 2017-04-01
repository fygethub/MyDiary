import React from 'react'
import FilterLink from '../todoContainer/FilterLink'

const Footer = () => (
    <p>
        show:
        {' '}
        <FilterLink filter="show_all">
            All
        </FilterLink>
        {', '}
        <FilterLink filter="show_active">
            All
        </FilterLink>
        {', '}
        <FilterLink filter="show_computed">
            All
        </FilterLink>
    </p>
)

export default Footer;