import { CurrencyPair, TokenSymbol } from '../util/types';

export const availableMarkets: CurrencyPair[] = [
    {
        base: TokenSymbol.Dai,
        quote: TokenSymbol.Oxbtc,
    },
        {
        base: TokenSymbol.Weth,
        quote: TokenSymbol.Oxbtc,
    },
    {
        base: TokenSymbol.Zrx,
        quote: TokenSymbol.Oxbtc,
    },
    {
        base: TokenSymbol.Dai,
        quote: TokenSymbol.Weth,
    },
    {
        base: TokenSymbol.Dai,
        quote: TokenSymbol.Zrx,
    },
    {
        base: TokenSymbol.Weth,
        quote: TokenSymbol.Dai,
    },
    {
        base: TokenSymbol.Weth,
        quote: TokenSymbol.Zrx,
    },
];
