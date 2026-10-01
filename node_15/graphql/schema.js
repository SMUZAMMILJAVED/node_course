const typeDefs=`
type Query {
  me: User
}
 
type User {
  name: String
  age:Int
}
`
module.exports=typeDefs