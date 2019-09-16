import { AsyncStorage} from 'react-native';


const deviceStorage = {
    async getItem(key){
        try{
           let value = await AsyncStorage.getItem(key);
           return value;
        }catch(error){
          console.log("Async Storage Error"+ error.message)
        }
    },
    async setItem(key,value){
        try{
          await AsyncStorage.setItem(key,value)
        } catch(error) {
            console.log("Async Storage Error"+ error.message)
        }
    },
    async getJWT(){
        try{
          let token = await AsyncStorage.getItem('@token');
          return token;
        } catch(error) {
            console.log("Async Storage Error" + error.message)
        }
    },
    
}
export default deviceStorage;

