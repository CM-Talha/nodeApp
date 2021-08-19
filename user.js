const mongoose=require('mongoose');
User= new mongoose.Schema({ 
    name:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true
    }
  })

module.exports=mongoose.model('User',User);