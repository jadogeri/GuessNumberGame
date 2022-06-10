
const imageArray = new Array(
  require('../../../assets/images/brain.jpg'),
require('../../../assets/images/laptop.jpg'));
 console.log('line 5',imageArray[0]);
 console.log('line 6',imageArray[1]);


export const getImage = (text) =>{
    
   if (text === 'cpu')
        return imageArray[1];
    else
        return imageArray[0];
}