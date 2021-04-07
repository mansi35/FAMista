import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import db from '../../firebase';
import AddGroupUser from './AddGroupUser';

function AddGroupUsers({handleClose, setGroupName, setGroupUsers, groupUsers, groupName}) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const {currentUser} = useAuth();

    const createGroup = () => {
        if(groupName){
            console.log("hello")
            db.collection("rooms").add({
                name: groupName,
                users: groupUsers
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                groupUsers.map((userId) => {
                    db.collection('users').doc(userId).collection('groups').doc(docRef.id).set({
                        groupId: docRef.id,
                        groupName: groupName
                    })
                })
            })
            setGroupUsers([currentUser.uid]);
            setGroupName('');
            handleClose();
        }
        else {
            setError('Please input group name!')
        }
    }

    useEffect(() => {
        db.collection("users")
        .onSnapshot((snapshot) => 
            setUsers(snapshot.docs.map((doc) => ({
                userId: doc.id,
                user: doc.data()
            })))
        );
    // eslint-disable-next-line
    }, [])

    return (
        <div>
            <label>
                Enter Group Name <br />
                <input 
                    onChange={(e) => {
                        setGroupName(e.target.value)
                        console.log(groupName)
                    }} 
                    type="text" value={groupName} 
                    placeholder="Group Name" />
            </label>
            <div className="sidebar__chats">
            {users.map(({ userId, user }) => (
                <AddGroupUser 
                  key = {userId}
                  id = {userId}
                  name = {user.name}
                  profilePic = {user.profilePic}
                  setGroupUsers = {setGroupUsers}
                  groupUsers = {groupUsers}
                />
            ))}
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <button onClick={createGroup} type="submit" className="register__register">Create Group</button>
        </div>
    )
}

export default AddGroupUsers
