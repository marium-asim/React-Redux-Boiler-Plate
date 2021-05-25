const INITAL_STATE = {
    users:[
        {
            name:"Marrium",
            email:"maroo@outlook.com"
        },
        {
            name: "Blue",
            email: "hello"
        }
    ]
}



export default (state = INITAL_STATE, action) =>
{ 
    switch (action.type)
   {
       case "SETDATA":
           return({
               ...state,
               users: [...state.users, action.data]
           })
        default:
            return state;
   }

   
}