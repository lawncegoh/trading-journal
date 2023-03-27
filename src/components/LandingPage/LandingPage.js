import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-size:cover;
    padding-bottom: 30px;
`

const LandingPage = () => {
    return (
        <Fragment>
            <Container>
                Hello
            </Container>
        </Fragment>
    )
}

export default LandingPage