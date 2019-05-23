module.exports = (sequelize,Sequelize) =>{
    const Article = sequelize.define('article', {
        name: {
          type: Sequelize.STRING,
        },
        article: {
          type: Sequelize.STRING,
        },
        
      });
    /*  
    Product.sync()
        .then(() => console.log('Product table created successfully'))
        .catch(err => console.log('oooh, did you enter wrong database credentials?'));
    */
    return Article; 
}