const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/legacy',{
    useNewUrlParser: true,
    useCreateIndex: true
})

const lega= mongoose.model('lega',{
    username:{
        type:String,
        required: true,
    },
    review:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }
    
})
module.exports= lega