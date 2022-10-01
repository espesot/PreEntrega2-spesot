import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import Card from '../Card/Card'


// .map es el metodo que se utiliza react para hacer las iteraciones
function ItemList(props) {
  return (
            <FlexWrapper>
                {props.artList.map( (article) =>{
                    return <Card
                    key = {article.id} 
                    id ={article.id}
                    title = {article.title}
                    img = {article.img}
                    price = {article.price}
                    detail = {article.detail}
                    stock ={article.stock}
                    category = {article.category}
                    />
                })}
            </FlexWrapper>
  )
}

//la variabale artList viene del useState, esta variable se carga del setArtList que llama a la funcion getArticulos




export default ItemList