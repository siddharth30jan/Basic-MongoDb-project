// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Profile=require('../models/profile')

/*  This is a sample API route. */
/*
router.get('/all',(req,res)=>{

	Profile.find({age:{$gt: 20,$lt: 78}})
	.then((X)=>{

		res.json({
			mes: 'success',
			data: X
		})

	}).catch((err)=>{
		res.json({
			mes: 'failure',
			error: err
		})


	})

})*/

router.get('/all',(req,res)=>{

	Profile.find({age:{$gt: 20}})
	.then((X)=>{

		res.json({
			mes: 'success',
			data: X
		})

	}).catch((err)=>{
		res.json({
			mes: 'failure',
			error: err
		})


	})

})


//Should be an PUT!!
router.get('/update',(req,res)=>{
	let query=req.query
	let id=query.id
	delete query['id']
	Profile.findByIdAndUpdate(id,query,{new: true})
	.then((user)=>{
		res.json({mes: 'success '+ user})
	})
	.catch(err=>{
		res.json({mes: 'error '+ err})
	})
})
router.get('/delete',(req,res)=>{
	
	Profile.findByIdAndDelete(req.query.id)
	.then((user)=>{
		res.json({mes: 'success '+ user})
	})
	.catch(err=>{
		res.json({mes: 'error '+ err})
	})
})

router.post('/add',(req,res)=>{
	Profile.create(req.body)
	.then((user)=>{
		res.json({mes: 'success',data: user})
	})
	.catch(err=>{
		res.json({mes: 'error '+ err})
	})
})
	


module.exports = router
