type User = {
    id: number
    username: string
    role: UserRole
}

type UpdatedUser = Partial<User>

type UserRole = "guest" | "member" | "admin"

let members:User[] = []
let admins:User[] = []
let users:User[] = []
let nextId: number = 1

function isUser(checkuser:User): boolean{
    const user = users.find(user => user.username === checkuser.username)
    if(!user){
        return false
    }else{
        return true
    }
}

function addMember(userName: string){
    let member: User = {
        id: nextId++,
        username: userName,
        role: "member"
    }
    
    // if(!isUser(member)){
    //     users.push(member)      
    // }
    
    members.push(member)
    return console.log(`Added ${member.username} to member.`)
}

function addAdmin(userName: string): void{ //function return type
    let admin: User = {
        id: nextId++,
        username: userName,
        role: "admin"
    }
    admins.push(admin)
    let isInMembersIndex: number = members.findIndex(user => user.username === admin.username) 
    
    if(isInMembersIndex !== -1){
        members.splice(isInMembersIndex, 1)
    }
    
    // if(!isUser(admin)){
    //     users.push(admin)      
    // }
    
    return console.log(`Added ${admin.username} to admin.`)
}

function fetchUserDetail (username: string): User{
    const user = users.find(user => user.username === username)
    if(!user){
        throw new Error()
    }
    return user
}

function updateMember(id: number, UpdatedUser: Object ){
    const foundUser = members.find(foundUser => foundUser.id === id)
    if(!foundUser){
        throw new Error()
    }
    let oldData = String(`id: ${foundUser.id}, username: ${foundUser.username}`)
    Object.assign(foundUser, UpdatedUser)
    let newFoundUser = members.find(foundUser => foundUser.id === id)
    if(!newFoundUser){
        throw new Error()
    }
    let newData = String(`id: ${newFoundUser.id}, username: ${newFoundUser.username}`)
    
    return console.log(`Updated| ${oldData} -> ${newData}`)
}

console.log("user:", users)

addMember("koonnew8688")
console.log("member: ", members)

updateMember(1, {username: "Chollasak"})