import React from "react";
import { Card, Col, Row } from 'antd';
import './movieBook.css';
// import '../navbar';

function MovieBook(){
    return(
       
    <div className="site-card-wrapper">
         <div>
         <navbar/>
         
    <Row gutter={16}>
      <Col span={8}>
        <Card style={{ width: 250 }}
    cover={<img alt="example" src="https://cdn.cbeditz.com/cbeditz/thumbnail/kgf-chapter-2-movie-poster-background-download-11610710099utufdj4uyl.webp" />} >
    KGF Chapter 2<br/>

    <button><center>Add to cart</center></button>
        </Card>
      </Col>

      <Col span={8}>
        <Card style={{ width: 250 }}
    cover={<img alt="example" src="https://cdn.cbeditz.com/cbeditz/thumbnail/kgf-chapter-2-movie-poster-background-download-11610710099utufdj4uyl.webp" />} >
    Card content<br/>
    <button><center>Add to cart</center></button>
        </Card>
      </Col>
      <Col span={8}>
        <Card style={{ width: 250 }}
    cover={<img alt="example" src="https://cdn.cbeditz.com/cbeditz/thumbnail/kgf-chapter-2-movie-poster-background-download-11610710099utufdj4uyl.webp" />} >
    Card content<br/>
    <button><center>Add to cart</center></button>
        </Card>
      </Col> 
      <Col span={8}><br/>
        <Card style={{ width: 250 }}
    cover={<img alt="example" src="https://cdn.cbeditz.com/cbeditz/thumbnail/kgf-chapter-2-movie-poster-background-download-11610710099utufdj4uyl.webp" />} >
    Card content<br/>
    <button><center>Add to cart</center></button>
        </Card>
      </Col>

      <Col span={8}><br/>
        <Card style={{ width: 250 }}
    cover={<img alt="example" src="https://cdn.cbeditz.com/cbeditz/thumbnail/kgf-chapter-2-movie-poster-background-download-11610710099utufdj4uyl.webp" />} >
    Card content<br/>
    <button><center>Add to cart</center></button>
        </Card>
      </Col>

      <Col span={8}><br/>
        <Card style={{ width: 250 }}
    cover={<img alt="example" src="https://cdn.cbeditz.com/cbeditz/thumbnail/kgf-chapter-2-movie-poster-background-download-11610710099utufdj4uyl.webp" />} >
    Card content<br/>
    <button><center>Add to cart</center></button>
        </Card>
      </Col>
    </Row>
    </div>
  </div>
    );

}

export default MovieBook;