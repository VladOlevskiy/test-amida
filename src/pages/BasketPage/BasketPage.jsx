import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './BasketPage.scss';
import { Container } from 'react-bootstrap';
import BasketList from '../../components/BasketList/BasketList';

const BasketPage = ({ myItems, total, removeItem, removeAll }) => {
  return (
    <section className="section-basket">
      <Container>
        <div className="card-basket__top">
          <h2 className="card-basket__top-text">Мій кошик :</h2>
          <h3 className="card-basket__top-text">Загальна сума: {total}грн</h3>
          {myItems.length >= 1 && (
            <Button variant="outline-danger" onClick={() => removeAll()}>
              Видалити ВСЕ з кошика
            </Button>
          )}
          {myItems.length === 0 && (
            <p className="card-basket__top-text">Додайте щось в кошик</p>
          )}
        </div>
        <ul>
          {myItems.length > 0 && (
            <BasketList myItems={myItems} removeItem={removeItem} />
          )}
          {/* myItems.map((item) => (
              <div className="card-basket">
               <div className="card-basket__img-wrapper">
                  <img
                    className="image_basket"
                    src={item.image}
                    alt=""
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
                <div className="card-basket__text-wrapper">
                  <h2 className="card-basket__title">Бренд : {item.name}</h2>
                  <p className="card-basket__text">Ціна : {item.price}грн</p>
                </div>
                <Button
                  variant="outline-dark"
                  onClick={() => removeItem(item.id)}
                >
                  Видалити з кошика
                </Button>
              </div>
            ))} */}
        </ul>
      </Container>
    </section>
  );
};

export default BasketPage;

/* <Card className="card_basket  " key={item.id}>
  <div>
    <Card.Img src={item.image} />
  </div>
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Title>{item.price}</Card.Title>
    <Button onClick={() => removeItem(item.id)}>Видалити з кошика</Button>
  </Card.Body>
</Card>; */
