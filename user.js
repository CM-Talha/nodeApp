const mongoose=require('mongoose');
const Schema=mongoose.Schema;
new user.Schema({ 
    name:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true
    }
  })

  export default mongoose.model('user', userSchema);