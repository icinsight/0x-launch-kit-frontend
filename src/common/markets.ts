import { CurrencyPair, TokenSymbol } from '../util/types';

export const availableMarkets: CurrencyPair[] = [
    {
        base: TokenSymbol.Zrx,
        quote: TokenSymbol.Weth,
    },
    {
        base: TokenSymbol.Dai,
        quote: TokenSymbol.Oxb,
    },
        {
        base: TokenSymbol.Weth,
        quote: TokenSymbol.Oxb,
    },
    {
        base: TokenSymbol.Zrx,
        quote: TokenSymbol.Oxb,
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
