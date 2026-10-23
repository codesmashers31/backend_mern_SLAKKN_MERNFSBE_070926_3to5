

const MyButton = ({title, handlebtn}) => {
  return (
    <div>
      <button className="btn" onClick={handlebtn}>{title}</button>
    </div>
  )
}

export default MyButton
