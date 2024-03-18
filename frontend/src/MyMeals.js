import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export const MyMeals = ({ text, updatingInInput, deleteMyMeal}) => {
  console.log(text)
  return (
    <div>
      <p>{text}</p>
      <AiFillEdit onClick={updatingInInput}></AiFillEdit>
      <AiFillDelete onClick={deleteMyMeal}></AiFillDelete>
    </div>
  )
}