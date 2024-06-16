const fs = require('fs')

const getUsers = function(done){
    fs.readFile('User/users.json', (err, fileContent) => {
        if(err){
            return done ("Encountered error while getting users details")
        }

        let userData = JSON.parse(fileContent);
        return done(undefined, userData)
    })
}

const getUserId = function(userId, done){
    fs.readFile(`users/users.json`, (err, fileContent)=>{
        if (err){
            return done("Encountered error while getting users details")
        }
        let userData = JSON.parse(fileContent)
        const fetchedUsers = userData.find(usr => usr.userId == userId)
        if(fetchedUsers === undefined){
            return done('No user found for requested userID')
        }

        return done(undefined, fetchedUsers)
    })
}

const updateUserdetails = function(userId, userName, done){
    fs.readFile('User/users.json', (err, fileContent) => {
        if(err){
            return done ("Encountered error while getting users details")
        }
        let userData = JSON.parse(fileContent);
        let index = userData.findIndex(usr => usr.userId === userId)

        if (index == -1){
            return done('No user found for requested userID')
        }

        userData[index].userName = userName;
        fs.writeFile('User/user.json', JSON.stringify[userData], (err, updatedContent) => {
            if(err){
                return done("Encountered error while updating")
            }
            return done(undefined, "Successfully updated user data")
        })
    })
}

module.exports = {getUsers, getUserId, updateUserdetails}