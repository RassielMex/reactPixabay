import React from 'react'
import Card from './Card'

const ListCards = ({data}) => (

    <div className = "p-5 row">
        {
            data.map(hit =>{
                return(
                    <Card
                        key = {hit['id']}
                        imgURL = {hit['previewURL']}
                        tags = {hit['tags']}
                    />
                )
            })
        }
    </div>
)

export default ListCards