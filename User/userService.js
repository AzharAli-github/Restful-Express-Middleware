const userDAO = require('./userDAO')

const getUsers =  function(done){
    userDAO.getUsers(done)
}

const getUserId = function(userId, done){
    userDAO.getUserId(userId, done)
}

const updateUserdetails = function(userId, userName, done){
    userDAO.updateUserdetails(userId, userName, done)
}
module.exports = {getUsers, getUserId, updateUserdetails}