const{test,expect}=require('@playwright/test')
let userid;
test("get request",async ({request})=>{
   const response= await request.get('https://reqres.in/api/users/2');
    ( await response.json());
    await expect(response.status()).toBe(200);

})
test("post request",async ({request})=>{
   const response= await request.post('https://reqres.in/api/users',{data:{"name":"vasmi","lastname":"dhar"}});  
   console.log(await response.json());
   await expect(response.status()).toBe(201);

      let res=await response.json()
      userid=res.id;
      console.log(userid)
    
    
})
test("put request",async ({request})=>{
    const response=await request.put('https://reqres.in/api/users/'+userid,{data:{"name":"sai","lastname":"teja"}});
    console.log(await response.json());
    await expect(response.status()).toBe(200)

    
})
test("delete request",async ({request})=>{
   const response= await request.delete('https://reqres.in/api/users/'+userid)
   await expect(response.status()).toBe(204)

    
})