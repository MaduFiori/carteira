import {profile,cardinsert,cardremove,about} from "../utils/Functions"

export default function Navigation(){ 
    return(
    <div className = "navbar">
        <ul>
            <li><a href="#">MaduClub</a></li>
            <li><a href="#" onClick={profile}>Profile</a></li>
            <li><a href="#" onClick={cardinsert}>Insert card</a></li>
            <li><a href="#" onClick={cardremove}>Remove card</a></li>
            <li><a href="#" onClick={about}>About</a></li>
        </ul>
    </div>
)
}