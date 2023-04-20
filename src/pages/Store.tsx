import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export  function Store(){
  return(
    <>
    <Row xl={3} md={2} sm={1} className="g-2">
          {storeItems.map(items => ( 
            <Col key={items.id}>
              <StoreItem {...items}/>
              </Col>
          ))}
    </Row>
    </>
  )

}