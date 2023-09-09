const Expense= require('../models/expense')

exports.addExpense= async(req, res, next)=>{
    try{

        // if(!req.body.number)
        // {
        //     throw new Error('Phone num is mandatory')
        // }
    const amount= req.body.num;
    const desc= req.body.desc;
    const cat= req.body.cat;


    const data= await Expense.create({amount:amount, desc:desc, cat:cat})
    console.log('Expense created:', data);
    res.status(201).json(data);  //{expenseDetails: data}
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
}

exports.getExpense= async (req, res, next)=>{
    try{
    const expenses= await Expense.findAll();
    res.status(200).json(expenses);
    }catch(error){
        console.log('Error in get expense',JSON.stringify(error))
        res.status(500).json({error:error})
    }
}

exports.deleteExpense= async(req,res,next)=>{
    try{
        const Uid= req.params.id;
        await Expense.destroy({where: {id:Uid}})
        res.sendStatus(200);
       // res.status(200).json({allUsers: users});
        }catch(error){
            console.log('Error in deleting expense')
            res.status(500).json(error)
        }
}