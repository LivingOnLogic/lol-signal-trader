import { SignalTraderAgent } from './lib/SignalTraderAgent';

const agent = new SignalTraderAgent({
  token: "ARB",
  sentimentThreshold: 0.6,
  tradeAmount: 100
});

agent.run();
