/* eslint-disable no-unused-vars */
import React, {createContext, useState, useEffect}from 'react';
import { apiDemo } from '../apiDemo/apiDemo';

export const StatusContext = createContext();
const { Provider } = StatusContext;

export default function AppContexts({ children }) {
   
    const [application, setApplication] = useState({});
    const [dashboard, setDashboards] = useState({});
    const [website, setWebsite] = useState({});
    const [support, setSupport] = useState({});

    const [incident, setIncident] = useState({})
    
    const[Global, setGlobal] = useState({});
    const[AMS2, setAMS2] = useState({});
    const[AMS3, setAMS3] = useState({});
    const[BLR1, setBLR1] = useState({});
    const[FRA1, setFRA1] = useState({});
    const[LON1, setLON1] = useState({});
    const[NYC1, setNYC1] = useState({});
    const[NYC2, setNYC2] = useState({});
    const[NYC3, setNYC3] = useState({});
    const[SFO1, setSFO1] = useState({});
    const[SFO2, setSFO2] = useState({});
    const[SFO3, setSFO3] = useState({});
    const[SGP1, setSGP1] = useState({});
    const[TOR1, setTOR1] = useState({});
    
    const [allSystemsStatus, setAllSystemsStatus] = useState({});
    
    const [loading, setLoading] = useState(true);

    const allSystems = [application, support, dashboard, website ];
    const allRegions = [Global, AMS2, AMS3, BLR1, FRA1, LON1, NYC1, NYC2,];
    // cut SFO1, SFO2, SFO3, SGP1, TOR1, NYC3

    useEffect(() => {
        //Fetch demo API:
        setTimeout(function fetchApi(){
            setDashboards(() => {
                return {...apiDemo.main.dashboard};
            });

            setApplication(() => {
                return {...apiDemo.main.application};
            });

            setWebsite(() => {
                return {...apiDemo.main.website};
            });

            setSupport(() => {
                return {...apiDemo.main.support};
            });


            setIncident(() => {
                return {...apiDemo.incident}
            })

            
            setGlobal(() => {
                return {...apiDemo.regions.Global}
            });

            setAMS2(() => {
                return {...apiDemo.regions.AMS2}
            });

            setAMS3(() => {
                return {...apiDemo.regions.AMS3}
            });

            setBLR1(() => {
                return {...apiDemo.regions.BLR1}
            });

            setFRA1(() => {
                return {...apiDemo.regions.FRA1}
            });

            setLON1(() => {
                return {...apiDemo.regions.LON1}
            });

            setNYC1(() => {
                return {...apiDemo.regions.NYC1}
            });

            setNYC2(() => {
                return {...apiDemo.regions.NYC2}
            });

            setNYC3(() => {
                return {...apiDemo.regions.NYC3}
            });

            setSFO1(() => {
                return {...apiDemo.regions.SFO1}
            });

            setSFO2(() => {
                return {...apiDemo.regions.SFO2}
            });

            setSFO3(() => {
                return {...apiDemo.regions.SFO3}
            });

            setSGP1(() => {
                return {...apiDemo.regions.SGP1}
            });

            setTOR1(() => {
                return {...apiDemo.regions.TOR1}
            });

            setLoading(false); 
    
        }, 1000);
    }, [])

    useEffect(() => {
        let isAllSystemsGood = (allSystems.every(system => (system.isGood)));
       // let isAllRegionsGood = (allRegions.every(region => (region.isGood)));
        if(isAllSystemsGood) {
            setAllSystemsStatus(() => {
                return {isGood: true}
            })
        } else {
            setAllSystemsStatus(() => {
                return {isGood: false}
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [application, dashboard, website, support, loading])
    
   

    return (
        <Provider value={{  
                            allSystems, 
                            allRegions, 
                            allSystemsStatus, 
                            incident,
                            loading,
                        }}>
            {children}
        </Provider>
    )
}
