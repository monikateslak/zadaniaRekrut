import React from 'react'
import { useEffect, useState } from 'react'

function Category() {
  useEffect(() => {
    fetchData()
    getImage()
  }, [])

  const [categories, setCategories] = useState([])
  const [image, setImage] = useState('')

  const fetchData = async () => {
    const data = await fetch('')
    const categories = await data.json()
    console.log(categories)
    setCategories(categories)
  }

  const getImage = async (name) => {
    console.log(name)
    const q = name.split(' ').join('+')
    const img = await fetch(
      `https://pixabay.com/api/?key=apikey&q=${q}&image_type=photo`,
    )
    const image = await img.json()
    console.log(image)
    setImage(image.previewURL)
  }

  return (
    <div className="categories">
      Category test
      
      <div className="category-grid">
        {categories.map((category) => (
          <div className="category">{category.name}</div>
        ))}
      </div>
    </div>
  )
}

export default Category
