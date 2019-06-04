import React from 'react'
import { Box, Text, Flex } from 'rebass'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FourByFour from '../FourByFour'
import { Divider, Hint } from '../index'
import Loader from '../Loader'

const FirstExchangeItem = ({ topTen }) => (
  <FourByFour
    p={24}
    rounded bg="white"
    topLeft={
      <Hint
        color="text"
        fontSize={15}
        fontWeight={500}
      >
        Token
      </Hint>}
    bottomLeft={
      <Text
        color="uniswappink"
        className="-transition"
        fontSize={20}
        lineHeight={0.1}
        fontWeight={350}
      >
        {topTen.tokenName}
      </Text>
    }
    topRight={
      <Hint
        color="text"
        fontSize={15}
        fontWeight={500}
      >
        Total Volume In Eth
      </Hint>}
    bottomRight={
      <Text
        color="uniswappink"
        fontSize={20}
        lineHeight={0.1}
        fontWeight={350}
      >
        {topTen.tradeVolumeEth}
      </Text>
    }
  />
)

const ExchangeItem = ({ topTen }) => (
  <Box>
    <FourByFour
      p={24}
      rounded bg="white"
      bottomLeft={
        <Text
          color="uniswappink"
          className="-transition"
          fontSize={20}
          lineHeight={0}
          fontWeight={250}
        >
          {topTen.tokenName}
        </Text>
      }
      bottomRight={
        <Text
          color="uniswappink"
          fontSize={20}
          lineHeight={0}
          fontWeight={250}
        >
          {topTen.tradeVolumeEth}
        </Text>
      }
    />

    <Divider/>
  </Box>
)

const List = styled(Box)`
  height: 700px;
  max-height: 700px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

// @TODO rework into virtualized list
const PoolSizeList = ({ topTen }) => {
  if (topTen.length == 0) {
    return (
      <Loader/>
    )
  } else {
    return (
      <List p={24}>
        <FirstExchangeItem topTen={topTen.slice(0, 1)}/>
        {topTen.slice(1, 20).map((exchanges, index) => (
          <ExchangeItem key={index} topTen={exchanges}/>
        ))}
      </List>
    )
  }
}

PoolSizeList.defaultProps = {
  transactions: []
}

PoolSizeList.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default PoolSizeList
