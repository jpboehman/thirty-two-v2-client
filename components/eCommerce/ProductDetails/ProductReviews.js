import React from 'react';
import Grid from "@mui/material/Grid";

const ProductReviews = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={2}
        alignItems="center"
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 3, xl: 4 }}
      >
        <Grid item xs={12} md={12} lg={4} xl={4}>
          <div className='review-card'>
            <div className='content'>
              <div className='reating'>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit.</p>

              <img src="/images/down-arrow.png" alt="down-arrow" className='down-arrow' />
            </div>
            <div className='info'>
              <img src="/images/user1.png" alt="User" />
              <h4>Alvarado Turner</h4>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={12} lg={4} xl={4}>
          <div className='review-card'>
            <div className='content'>
              <div className='reating'>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit.</p>

              <img src="/images/down-arrow.png" alt="down-arrow" className='down-arrow' />
            </div>
            <div className='info'>
              <img src="/images/user2.png" alt="User" />
              <h4>Riley Dave</h4>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={12} lg={4} xl={4}>
          <div className='review-card'>
            <div className='content'>
              <div className='reating'>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit.</p>

              <img src="/images/down-arrow.png" alt="down-arrow" className='down-arrow' />
            </div>
            <div className='info'>
              <img src="/images/user3.png" alt="User" />
              <h4>Ivan Dan</h4>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default ProductReviews;