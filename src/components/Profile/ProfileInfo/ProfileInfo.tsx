import React from "react";
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img alt=''
                     src='https://lancraft.cz/Uploads/Static/Achievements/2022/2/28/b44a8835-3f19-48cb-b49f-9a58290bc15e.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo