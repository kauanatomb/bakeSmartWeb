import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomeRecipes from './pages/HomeRecipes.jsx'
import CreateRecipes from './pages/Recipe/CreateRecipes.jsx'
import DeleteRecipe from './pages/Recipe/DeleteRecipe.jsx'
import ShowRecipe from './pages/Recipe/ShowRecipe'
import EditRecipe from './pages/Recipe/EditRecipe.jsx'
import CreateIngredients from './pages/Ingredient/CreateIngredients.jsx'
import HomeIngredients from './pages/HomeIngredients.jsx'
import DeleteIngredient from './pages/Ingredient/DeleteIngredient.jsx'
import EditIngredient from './pages/Ingredient/EditIngredient.jsx'
import CreateIngredientsRecipe from './pages/IngredientsRecipe/CreateIngredientsRecipe.jsx'
import DeleteIngredientRecipe from './pages/IngredientsRecipe/DeleteIngredientRecipe.jsx'
import LoginUser from './pages/User/LoginUser.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginUser/>}/>
      <Route path='/recipes' element={<HomeRecipes/>} />
      <Route path='/ingredients' element={<HomeIngredients/>} />
      <Route path='/ingredients/delete/:id' element={<DeleteIngredient/>} />
      <Route path='/ingredients/edit/:id' element={<EditIngredient/>} />
      <Route path='/ingredients/create' element={<CreateIngredients/>} />
      <Route path='/recipes/create' element={<CreateRecipes/>} />
      <Route path='/recipes/details/:id' element={<ShowRecipe/>} />
      <Route path='/recipes/edit/:id' element={<EditRecipe/>} />
      <Route path='/recipes/delete/:id' element={<DeleteRecipe/>} />
      <Route path='/recipes/:id/ingredients' element={<CreateIngredientsRecipe/>} />
      <Route path='/recipes/:recipeId/ingredients/delete/:id' element={<DeleteIngredientRecipe/>} />
    </Routes>
  )
}

export default App