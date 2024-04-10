// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./database.mjs";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  try{

    const databaseName = await central(id);
    const returnValue = await Promise.all([dbs[databaseName](id), vault(id)])
    const user_data = returnValue[0];
    const vault_data = returnValue[1];
  
    const all_user_data = {id:id, ...user_data, ...vault_data}
    return all_user_data;
  } catch (error){
    return Promise.reject(error);
  }

}

getUserData(1)
  .then(userData => console.log(userData))
  .catch(error => console.log("Error", error));


