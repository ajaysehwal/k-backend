const {Commercial,Institiutional,Interior,Landscape,Residentional,All}=require('../data/index');

class ProjectImage{
   commercial(){
    return Commercial;
   }
   institiutional(){
    return Institiutional;
   }
   interior(){
    return Interior
   }
   landscape(){
     return Landscape;
   }
   residentional(){
     return Residentional;
   }
   all(){
   return All
   }

}

module.exports=ProjectImage;