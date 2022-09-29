import { createContext } from 'react';

export const BlockchainContext = createContext({
    lotteryOwner: 0,
    ticketPrice: 0,
    prizePool: 0,
    lastPool: 0,
    lastWinner: 0,
    usageFeePool: 0,
    resetTime: 0,
});