require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note mushroom proof hunt cloth flame surface'; 
let testAccounts = [
"0x9dfe8e2835ac065d4bcba4a3b8f07614a898d1d3bf9915cc68db6d9174c91fb0",
"0xa332f172bbf6cacd85a0f8fecee96bc53508edcd328de7db857a8902baeea026",
"0x5dbd1e565aa46fb56d2b88b43503fdc404ba5ad2cd9ab4d5be54f948615c447e",
"0x036865b1e4ff2563175ad4740304fde7c0854814b8ac5a562975ab40fd371916",
"0xde5ca480c7323373861158df7e735508f226b7211475ac56ae4505deee8e386b",
"0xa9d0a9a733a09e5c7ee3a14de98e3942f483e1b1f03852fdd91bf3748d3e3a3d",
"0x2353e1c1e9207936827c164986a7fa2e8ed47485f5b8e26b8c8a1477cb4e2e0e",
"0x78078cdca872e5f4ab5b779d754dff71d6a0476b77f333da19e279c9b2130e54",
"0x1a281bc2ccf6b8fc1dd1546ed9140e18277ca96a0599cd950f6413dcbe9fa047",
"0x620c2c6aaebaacfe06545cdbf14a18c9581a35ad357e7d38e8915c2887ffc9c2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
