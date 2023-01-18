import ItemSingle from "./ItemSingle";

function ItemList(props) {

    const alertHandler=(item)=>{
        alert(`You have chosen ${item}!`);
    }
    
    const itemStore = props.fruitStore.map((fruitItem)=><div>
       <ItemSingle fruitItem = {fruitItem} click={alertHandler} />
        <hr />
    </div>)
    return itemStore
}

export default ItemList;