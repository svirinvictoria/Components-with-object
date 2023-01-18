import "./ItemSingle.css"

function ItemSingle(props){
    return (
      <div className={props.fruitItem.name}>
        {props.fruitItem.name}
        {props.fruitItem.price}
        <button onClick={()=>props.click(props.fruitItem.name)}>
          {" "}
          Choose me
        </button>
      </div>
    );
};

export default ItemSingle;