module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                shippedProposals: true,
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins: ['react-require', '@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-private-methods']
}
