import React from 'react'
import AddGroupUsers from './AddGroupUsers';

function AddGroupUsersModal({show, handleClose, setGroupName, setGroupUsers, groupUsers, groupName}) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
        <section className="modal-main">
            <AddGroupUsers handleClose={handleClose} setGroupName={setGroupName} setGroupUsers={setGroupUsers} groupUsers={groupUsers} groupName={groupName} />
            <button type="button" onClick={handleClose}>
            Close
            </button>
        </section>
        </div>
    );
}

export default AddGroupUsersModal
