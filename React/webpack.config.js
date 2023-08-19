// Quem executará este arquivo é o Node, por isso é necessário a utilização da importação CommonJS.
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const path = require('path') // Identifica o sistema operacional e corrige o caminho relativo que foi passado para as configurações daquele sistema operacional.

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.js'), // Aqui vai o arquivo de inicialização da nossa aplicação React, basicamente o arquivo que está utilizando o ReactDOM.render.
    output: {
        path: path.resolve(__dirname, 'build'), // Pasta onde será salvo o bundle da nossa aplicação.
        filename: 'bundle[hash].js' // Nome que queremos para o nosso bundle. Utilizamos o [hash] para que uma hash aleatória seja gerada para compor o nome do nosso bundle, para que navegadores que utilizem cache possam atualizar o seu cache caso o nosso arquivo tenha novas configurações. Uma nova hash só será gerada caso o webpack note novas configurações no código.
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),

        new CleanWebpackPlugin()
        
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use:'babel-loader',
            },
        ]
    },

    devServer: {
        port: 3000,
    },
}