import React from 'react';
import { Card, Grid } from '@mui/material';
import { Container, Box } from '@mui/system';
import { BlockchainContext } from './context/BlockchainContext';
import CardContainer from './components/CardContainer';

function App() {
  const [lotteryOwner, setLotteryOwner] = React.useState('');
  const [ticketPrice, setTicketPrice] = React.useState('');
  const [prizePool, setPrizePool] = React.useState('');
  const [lastPool, setLastPool] = React.useState('');
  const [lastWinner, setLastWinner] = React.useState('0');
  const [usageFeePool, setUsageFeePool] = React.useState('');
  const [resetTime, setResetTime] = React.useState('0');

  return (
    <BlockchainContext.Provider value={{
      lotteryOwner, setLotteryOwner,
      ticketPrice, setTicketPrice,
      prizePool, setPrizePool,
      lastPool, setLastPool,
      lastWinner, setLastWinner,
      usageFeePool, setUsageFeePool,
      resetTime, setResetTime,
    }}>
      <Container>
        <Grid container spacing={4} mt="75px">
          <Grid item xs={4}>
            <CardContainer title="Current Jackpot" description={`${prizePool / 10 ** 18} MOK`} />
          </Grid>

          <Grid item xs={4}>
            <CardContainer title="Ticket Price" description={`${ticketPrice / 10 ** 18} MOK`} />
          </Grid>

          <Grid item xs={4}>
            <CardContainer title="Enter Now!" description="button placeholder" />
          </Grid>

          <Grid item xs={4}>
            <CardContainer title="Previous Jackpot" description={`${lastPool / 10 ** 18} MOK`} />
          </Grid>

          <Grid item xs={4}>
            <CardContainer title="Last Winning Entry" description={`Entry #${lastWinner}`} />
          </Grid>

          <Grid item xs={4}>
            <CardContainer title="Currently Locked Until" description={`${resetTime}`} />
          </Grid>

          <Grid item xs={4}>
            <CardContainer title="Usage Fees" description={`${usageFeePool / 10 ** 18} MOK`} />
          </Grid>

          <Grid item xs={4}>
            <CardContainer title="Withdraw Fees" description="button placeholder" />
          </Grid>

          <Grid item xs={4}>
            <CardContainer title="Pick Winner" description="button placeholder" />
          </Grid>

          <Grid item xs={4}>
            <CardContainer title="Change Ticket Price" description="placeholder" />
          </Grid>

          <Grid item xs={4}>
            <CardContainer title="Add Manager" description="placeholder" />
          </Grid>

        </Grid>
      </Container>
    </BlockchainContext.Provider>
  );
}

export default App;
