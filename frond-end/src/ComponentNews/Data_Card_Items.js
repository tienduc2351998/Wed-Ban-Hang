import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { data_Card } from './Data_Card';

function Data_Card_Items(props) {
    // khai bao bien de su dung
    let news = data_Card;

    let items_news = news.map((newItem, index) => {
        return (
            <Col sm={3}>
                <Card style={{ width: '18rem', marginTop: '15px' }} key={index}>
                    <Card.Img variant="top" src={newItem.image} style={{ width: '286px', height: '189px' }} />
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title>{newItem.title}</Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                            {newItem.Text}
                        </Card.Text>
                        <Button variant="primary">Xem chi tiết</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return items_news;
}

export default Data_Card_Items;