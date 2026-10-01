function resolveQueryMe() {
  return {
    name:'syed muzammil javed',
    age :24
  }
}
 
const resolves={
    Query:{
        me:resolveQueryMe
    }
}
module.exports=resolves;