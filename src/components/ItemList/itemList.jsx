import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import Card from '../Card/Card'

function ItemList(props) {
  return (
            <FlexWrapper>
                {props.artList.map( (article) =>{
                    return <Card
                    key = {article.id} 
                    title = {article.title}
                    img = {article.img}
                    price = {article.price}
                    detail = {article.detail}
                    />
                })}
            </FlexWrapper>
  )
}

export default ItemList