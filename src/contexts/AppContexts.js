import React, {createContext, useState, useEffect}from 'react';
import { apiDemo } from '../apiDemo/apiDemo';

export const StatusContext = createContext();
const { Provider } = StatusContext;

export default function AppContexts({ children }) {
    const [admin, setAdmin] = useState({name: "Admin", link:"https://apps.pagefly.io/"});
    const [dashboard, setDashboards] = useState({name: "Dashboard", link: "https://apps.pagefly.io/"});
    const [website, setWebsite] = useState({name: "Website", link: 'https://pagefly.io/'});
    const [support, setSupport] = useState({name: "Support", link: 'https://help.pagefly.io/'});
    const [allSystemsStatus, setAllSystemsStatus] = useState({});
    const [loading, setLoading] = useState(true);
    const allSystems = [admin, dashboard, website, support];


    useEffect(() => {
        //Fetch API:
        setTimeout(function setTime(){
            setDashboards(prev => {
                return {...prev, isGood: apiDemo.dashboard.isGood};
            });

            setAdmin(prev => {
                return {...prev, isGood: apiDemo.admin.isGood};
            });

            setWebsite(prev => {
                return {...prev, isGood: apiDemo.website.isGood};
            });

            setSupport(prev => {
                return {...prev, isGood: apiDemo.support.isGood};
            });

            setLoading(false); 

            
        }, 1000);
    }, [])

    useEffect(() => {
        let isUpdate = (allSystems.every(system => (system.isGood))) ;
        if(isUpdate){
            setAllSystemsStatus(() => {
                return {isGood: true}
            })
        } else {
            setAllSystemsStatus(() => {
                return {isGood: false}
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [admin, dashboard, website, support, loading])
    
   

    return (
        <Provider value={{allSystems, admin, dashboard, website, support, allSystemsStatus, loading}}>
            {children}
        </Provider>
    )
}
