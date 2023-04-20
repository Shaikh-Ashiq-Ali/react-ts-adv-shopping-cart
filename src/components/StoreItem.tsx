import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
  id : number,
  name : string,
  price : number,
  imgUrl : string
}

export function StoreItem( {id , name, price, imgUrl} : StoreItemProps){
const {
  getItemQuantity,
   increaseCartQuantity, 
   decreaseCartQuantity,
   removeFromCart
} = useShoppingCart()
  const quantity = getItemQuantity(id);

return <Card className="h-100">
  <Card.Img variant="top" src={imgUrl} className="h-100" style={{ objectFit : "cover" }} />
  <Card.Body className="d-flex flex-column">
  <Card.Title className="d-flex align-items-center justify-content-between">
    <span>{name}</span>
    <span>{formatCurrency(price)}/kg</span>
  </Card.Title>
  <div className="mt-auto">
    {quantity === 0 ? (
      <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add to Cart</Button>
    ) : <div className="d-flex align-items-center flex-column gap-2">
      <div className="d-flex  align-items-center gap-1">
        <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
        <div>
          <span className="fw-bold fs-2">{quantity}</span>
            in cart
        </div>
        <Button onClick={() => increaseCartQuantity(id)}>+</Button>
      </div>
      <Button className="btn-danger" onClick={() => removeFromCart(id)}>Remove</Button>
      </div>}
  </div>
  </Card.Body>
</Card>
}