const path = require('path')
module.export={  

    
    entry:'./src/index.js', 

    output:{ 
        path:path.resolve(__dirname, 'dist'), 
        filename: 'main.js',

    }, 

    module:{ 
        
        
        rules:[ { test: /\.sass$/ , $use:'sass-loader' }  ] ,


    
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'), 
        port:9000,
        inline: false,

    }

 
}; 