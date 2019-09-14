const mongoose=require('mongoose')

const Profile=new mongoose.Schema({
	firstName: {type: String,default: '',trim: true},
	lastName: {type: String,default: '',trim: true},
	age :{type: Number,default: 0}

})

module.exports=mongoose.model('Profile',Profile)