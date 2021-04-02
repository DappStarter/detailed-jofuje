require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember evil grid prize off gate'; 
let testAccounts = [
"0xdd909b1d0a113273f92ae1b21d5166a9ed073e4994377f69702f488bf813cff8",
"0x1c2e4e61c88ab6dc7c65de2dbb336369ed3829984d1e2bcfe921c9019b65aa14",
"0x44b873245ae4d28fd625e031c86c178666ce629877bcab3bbe14b99053304eea",
"0x22c1543ce84a4db92300189a3403a168a8ac6b6c43fc1866cf1fe558a87387bc",
"0x06159c6541c3150e50d9e2b30170373b7f7e128b0e871bc948b81c019b42cb94",
"0x997e2a4a9b629648e1dad01b4ec0f829b20602ca0d5d9034bfc6bbc9383bdf9f",
"0xb1bfdca3dec62213c4310713fa048c6e81b0c6c886b869548db086fe0dcdd1cd",
"0xe0f417d639f839a887f7c225c26c5d80b411f316f0ce8b0f8f26d0ef2df94ba9",
"0xabcacfe68480be5594cde4a362a33e6d1842eec68c7f8663af4dcfba166556b3",
"0x4e9bb446cddf6e90e308db3bf6726cddd2caf526f7ebaf8bb4df2947d454964d"
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
