import React from 'react'

import { Container, Title, Description, StyledCurrencyIcon } from './style'

export default function Footer() {
    return (
        <Container>
            <div>
                <StyledCurrencyIcon />
                <Title>Blockchain Technology</Title>
                <Description>The Tether platform is built on blockchain technology, using the security and transparency they provide.</Description>
            </div>
            <div>
                <StyledCurrencyIcon />
                <Title>Stable  currency</Title>
                <Description>Tether converts cash into digital currency, to anchor or tether the value to the price of national currencies.</Description>
            </div>
            <div>
                <StyledCurrencyIcon />
                <Title>Increased security</Title>
                <Description>Tether technology provides world-class security and meets international standards.</Description>
            </div>
        </Container>
    )
}