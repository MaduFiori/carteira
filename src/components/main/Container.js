import { useEffect, useState } from "react";

import Balance from "./Balance";
import Cards from "./Cards";
import Panel from "./Panel";
import Plans from "./Plans";
import Waitlist from "./Waitlist";
import {path} from "../../config/path";

export default function Container(){

    const [datacards,setDataCards] = useState([]);
        useEffect(()=>{
            fetch(`${path}/wallet/list/user/628fd2a4b8c00959b960a4c9`,{
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    "content-type": 'application/json',
                    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGZkMmE0YjhjMDA5NTliOTYwYTRjOSIsInVzZXIiOiJndXN0YXZvIiwiZW1haWwiOiJza2F0ZUBlbWFpbC5jb20iLCJpYXQiOjE2NTQxOTEwODYsImV4cCI6MTY1NDM2Mzg4Nn0.mGnyzE5EoC4UtEMZrJ7ldvJh85zINmAmQ-t5WECt4P0"
                }
            })
            .then((result) => result.json())
            .then((data) =>{
                console.log(data.payload);
                setDataCards(data.payload)
            })
            .catch((err) =>console.error(`Erro at loading api -> ${err}`));
        },[]);

        const [balance, setBalance] = useState([]);

        const changeData = (content) => {
            setBalance(content);
        };

    return (
        <div className = "container">
           <Cards data={datacards} action={changeData}/>
           <Panel data={balance}/>
           <Waitlist/>
           <Plans/>
           <Balance data={balance}/>
        </div>
    );
}