const User= require('../models/User')

exports.postUser= async(req, res, next)=>{
    try{

        // if(!req.body.number)
        // {
        //     throw new Error('Phone num is mandatory')
        // }
    const name= req.body.name;
    const email= req.body.email;
    const phonenumber= req.body.number;
    console.log('Creating user:', name, email, phonenumber);

    const data= await User.create({name:name, email:email, phonenumber:phonenumber})
    console.log('User created:', data);
    res.status(201).json(data);
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
}

exports.getUser= async (req, res, next)=>{
    try{
    const users= await User.findAll();
    res.status(200).json(users);
    }catch(error){
        console.log('Error in get user',JSON.stringify(error))
        res.status(500).json({error:error})
    }
}

exports.deleteUser= async(req,res,next)=>{
    try{
        const Uid= req.params.id;
        await User.destroy({where: {id:Uid}})
        res.sendStatus(200);
       // res.status(200).json({allUsers: users});
        }catch(error){
            console.log('Error in deleting user')
            res.status(500).json(error)
        }
}