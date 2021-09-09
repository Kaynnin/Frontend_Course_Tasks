import React from 'react'
import * as S from './styles'

// ICONS //
import filter from '../../assets/Filter-Icon.png'

function FilterCard({ title, actived }) {
  return (
    <S.Container actived={actived}>
      <img src={filter} alt="Filtro" />
      <span>{title}</span>
    </S.Container>
  )
}

export default FilterCard
