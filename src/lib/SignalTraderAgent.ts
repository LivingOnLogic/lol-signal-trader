type Config = {
  token: string;
  sentimentThreshold: number;
  tradeAmount: number;
};

export class SignalTraderAgent {
  config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async run() {
    console.log("Signal trader running for token:", this.config.token);

    const sentiment = await this.getSentiment(this.config.token);

    console.log("Current sentiment score:", sentiment);

    if (sentiment > this.config.sentimentThreshold) {
      await this.executeTrade(this.config.token, this.config.tradeAmount);
    } else {
      console.log("No trade condition met.");
    }
  }

  async getSentiment(token: string): Promise<number> {
    // Mock signal MCP response
    return 0.72;
  }

  async executeTrade(token: string, amount: number) {
    console.log(\`[Mock] Executing swap of \${amount} USDC → \${token}\`);
  }
}