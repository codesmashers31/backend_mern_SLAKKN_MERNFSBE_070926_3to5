

const PrimitiveData = ({dataSent}) => {

  console.log(dataSent);

  
  
  return (
    <>
    <div>
        <h1>Primitive</h1>
        <div>
            <h3>{dataSent.title}</h3>
            <h4>{dataSent.vote}</h4>
            <p>Lorem ipsum dolor sit amet {dataSent.title} consectetur adipisicing elit. Repudiandae consequatur placeat {dataSent.vote} aperiam nostrum deserunt nesciunt eum nulla dolorem. Exercitationem quae accusantium omnis amet velit! Ut cupiditate quae quod iste facilis.</p>
        </div>
    </div>



    <div> 
      <h1 style={{backgroundColor:"blue"}}>
        {dataSent.isActive}
        {dataSent.isActive && "React"}

        
      </h1>

      <p>
        {dataSent.isActive ?? <p>This is Looading...</p>}
      </p>
    </div>
    </>
  )
}

export default PrimitiveData