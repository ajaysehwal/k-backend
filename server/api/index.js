const Services=require('../services/index');
module.exports=(app)=>{
    const sendingdata=new Services();
     app.get('/',(req,res)=>{
        res.send({Message:"DreamDesignArchitect_Server"});
     })
     app.get('/projectimages-commercial',async(req,res,next)=>{
        try{
           const data=sendingdata.commercial();
             res.status(200).json({commercial:data})
        }catch(err){
            next(err);
        }
     })
     app.get('/projectimages-institiutional',async(req,res,next)=>{
        try{
           const data=sendingdata.institiutional();
             res.status(200).json({institiutional:data})
        }catch(err){
            next(err);
        }
     })
     
     app.get('/projectimages-interior',async(req,res,next)=>{
        try{
           const data=sendingdata.interior();
             res.status(200).json({interior:data})
        }catch(err){
            next(err);
        }
     })
     app.get('/projectimages-landscape',async(req,res,next)=>{
        try{
           const data=sendingdata.landscape();
             res.status(200).json({landscape:data})
        }catch(err){
            next(err);
        }
     })
     app.get('/projectimages-residentional',async(req,res,next)=>{
        try{
           const data=sendingdata.residentional();
             res.status(200).json({residentional:data})
        }catch(err){
            next(err);
        }
     })
     app.get('/projectimages-all',async(req,res,next)=>{
        try{
           const data=sendingdata.all();
             res.status(200).json({all:data})
        }catch(err){
            next(err);
        }
     })
}