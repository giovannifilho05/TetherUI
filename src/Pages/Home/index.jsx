import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import graph from '../../assets/img/graph.png'

import {
    Container,
    Main,
    Presentation,
    Text,
    PrimaryText,
    SecondaryText,
    Buttons,
    Button,
    Graph,
} from './style'

export default function Home() {
    return (
        <Container >

            <Header />

            <Main>
                <Presentation className="opa">
                    <Text>
                        <PrimaryText>Digital money for a digital age</PrimaryText>
                        <SecondaryText>Get the joint benefits of open blockchain technology and traditional currency</SecondaryText>
                    </Text>
                    <Buttons>
                        <Button primary>Integrate with Tether</Button>
                        <Button>View white paper</Button>
                    </Buttons>
                </Presentation>
                <Graph>
                    <img src={graph} alt="Graph" />
                </Graph>
            </Main>

            <Footer />

        </Container>
    )
}