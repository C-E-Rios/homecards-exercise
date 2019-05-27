import React from 'react';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function Homecard({title, currencySymbol, imgSrc = '', pricePerMonth}) {
  const HomecardWrapper = styled.article`
    padding: 20px;
    background-color: #f0f0f0;
    margin-bottom: 20px;
  `;

  const HomecardContent = styled.div`
    @media (min-width: 767px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  `;

  const HomecardTitle = styled.h2`
    font-size: 1.6em;
    font-weight: 100;
    margin: 20px 0 0;
    @media (min-width: 767px) {
      margin: 0;
    }

  `;

  const Image = styled.img`
    height: auto;
    width: 100%;
    @media (min-width: 767px) {
      max-width: 230px;
      max-height: 160px;
    }
  `;

  const CurrencyLabel = styled.p`
    font-size: 1.5em;
    font-weight: 700;
    margin: 0;
    text-align: right;
    padding-bottom: 20px;
    @media (min-width: 767px) {
      padding-bottom: 0;
      align-self: flex-start;
    }
  `;

  const HomecardFooter = styled.div`
    display: flex;
    @media (min-width: 767px) {
      display: block;
      text-align: right;
    }
  `;

  const Book = styled (Button)`
    flex-grow: 1;
  `;

  const Details = styled (Button)`
    && {
      display: none;
      @media (min-width: 767px) {
        display: inline-block;
        margin-right: 10px;
      }
    }
  `;

  return (
    <HomecardWrapper>
      <HomecardContent>
        <Image src={imgSrc} alt={title} />
        <HomecardTitle>{title}</HomecardTitle>
        <CurrencyLabel>{currencySymbol}{pricePerMonth}</CurrencyLabel>
      </HomecardContent>
      <HomecardFooter>
        <Details variant="contained" color="secondary">More details</Details>
        <Book variant="contained" color="primary">Book now!</Book>
      </HomecardFooter>
    </HomecardWrapper>
  );
}

Homecard.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  description: propTypes.string,
  currencySymbol: propTypes.string,
  imgSrc: propTypes.string,
  pricePerMonth: propTypes.number,
};

export default Homecard;
