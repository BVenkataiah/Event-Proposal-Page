import "./UserPage.css"
import LandingPageListItem from "../UserPageListItem/landingPageList"
import { useState } from "react";
import {Delete} from "@mui/icons-material"
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
const UserPage=()=>{
    const [selected,setSelected]=useState({isValid:false,data:{}});
    const [arr,setArr]=useState(Array(selected.data.length).fill(false));
    const [userInfo,setUserInfo]=useState({});
    const [proposals,setProposals]=useState([]);
    const userSelectionDeleteHandler = () => {
        Swal.fire({
            position: 'center',
            icon: 'question',
            title: 'Delete this proposal?',
            showConfirmButton: true,
            showDenyButton:true,
            confirmButtonText: 'Delete',
            denyButtonText: `Cancel`
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`https://eventproposalserver.onrender.com/users/${userInfo._id}`, { select: "" })
                    .then((response) => { setSelected({ isValid: false, data: {} }) })
                    .catch((e) => { console.log("error in deleting") })

            }
        })
    }
    const retriveUserInfo=()=>{
        axios.get("https://eventproposalserver.onrender.com/users/info",{withCredentials:true})
        .then((response)=>{
            setUserInfo(response.data.result);
            if(response.data.result.select)
            {
                axios.get(`https://eventproposalserver.onrender.com/events/${response.data.result.select}`,{withCredentials:true})
                .then((response)=>{setSelected({isValid:true,data:response.data.result})})
                .catch((e)=>{console.log(e)});
                }
            else{
                setSelected({isValid:false,data:{}})
            }

        }).catch((e)=>{console.log(e)});
    }
    const retriveProposals=()=>{
        axios.get("https://eventproposalserver.onrender.com/events/all",{withCredentials:true})
        .then((response)=>{
            console.log(response.data);
            setProposals(response.data.result);
        }).catch((e)=>{console.log(e)});
    }
    useEffect(()=>{
        retriveUserInfo();
        retriveProposals();
        
    },[])
    
    return(
        <>
        <article className="UserPageContainer">
            <TopBar user={userInfo.userName}/>
            <section className="UserPageImageSection">

            </section>
            <section  className="UserPagescrollSection">
            {
                selected.isValid?<h4 className="UserPageSelectedFieldHeading">Selected</h4>:null
            }
            {

               selected.isValid? <article className="UserSelectedEvent" >
               <img src={selected.data.eventImage} alt="pic"/>
               <ul>
                 <li>{selected.data.vendorName}</li>
                 <li>{selected.data.budget}/-</li>
                 <li>{selected.data.place}</li>
               </ul>
               <Delete className="UserSelectedEventDeleteIcon" onClick={userSelectionDeleteHandler}/>
                </article>:null
            }
            <section className={selected.isValid?"UserPageProposalsContainerafterSelection":"UserPageProposalsContainer"}>
                  <h4>Proposals</h4>
                  <section>
                    {
                        proposals.map((value,index)=>{
                            return <LandingPageListItem key={index} listItemData={value} urr={arr} setUrr={setArr} number={index} select={selected} setSelect={setSelected} user={userInfo._id} />
                        })
                    }
                  </section>
            </section>
            </section>

        </article>
        </>
    )
}
export default UserPage;