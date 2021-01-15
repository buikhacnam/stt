/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {createContext, useState, useEffect}from 'react';
import { apiDemo } from '../apiDemo/apiDemo';
import axios from 'axios';
import Client from '../Contenful';

export const StatusContext = createContext();
const { Provider } = StatusContext;

//crisp API config
const crispConfig = {
    method: 'get',
    url: 'https://api.crisp.chat/v1/website/7cd1799e-e8eb-476e-8cb7-33778fc41c2a',
    headers: { 
      'Authorization': 'Basic OTEyYTFmMTktZDJjYi00YzQ0LWJiNTQtNjZhMmJiN2FlNTllOjNiNDBhZGEwOWQ5ZmIyMmUxMmU4MjI0ZDY1MGFhNDdkYzRmNDFlZjlmNWNhZWJlMWE4YTM5ZmQwYjlhYmM3OTg=', 
      'Cookie': '__cfduid=dfa91d9b499ce131a929589bf71fa98cb1610461358'
    }
};

const applicationConfig = {
    method: 'get',
    url: 'https://apps.pagefly.io/',
    headers: {
        'Access-Control-Allow-Origin': 'https://pagefly.io/'
    }
}

const academyConfig = {
    method: 'get',
    url: 'https://academy.pagefly.io/',
    headers: {
        'Access-Control-Allow-Origin': 'https://pagefly.io/',
        'Access-Control-Allow-Credentials': true
    }
}

const documentConfig = {
    method: 'get',
    url: 'https://help.pagefly.io/',
    headers: {
        'Access-Control-Allow-Origin': 'https://pagefly.io/'
    }
}

const partnerConfig = {
    method: 'get',
    url: 'https://partners.pagefly.io/',
    headers: {
        'Access-Control-Allow-Origin': 'https://pagefly.io/'
    }
}

export default function AppContexts({ children }) {
   //main
    const [application, setApplication] = useState({isGood: true,
        name: "Application", 
        config: applicationConfig,
        link: 'https://apps.pagefly.io/',
        loading: true,});
    const [document, setDocument] = useState({isGood: true,
        name: "Document", 
        config: documentConfig,
        link: 'https://help.pagefly.io/',
        loading: true,});
    const [academy, setAcademy] = useState({isGood: true,
        name: "Academy", 
        config: academyConfig,
        link: 'https://academy.pagefly.io/',
        loading: true,});
    const [support, setSupport] = useState({isGood: true,
        name: "Live Support", 
        config: crispConfig,
        link: '#',
        loading: true,});
    const [partners, setPartners] = useState({isGood: true,
        name: "Partners", 
        config: partnerConfig,
        link: 'https://partners.pagefly.io/',
        loading: true,});

    // incident
    const [incident, setIncident] = useState([]);

    //regions
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
    // const[SFO3, setSFO3] = useState({});
    // const[SGP1, setSGP1] = useState({});
    // const[TOR1, setTOR1] = useState({});
    
    const [allSystemsStatus, setAllSystemsStatus] = useState({});
    
    const [loading, setLoading] = useState(true);

    const allSystems = [application, support, document, academy, partners, ];
    const allRegions = [Global, AMS2, AMS3, BLR1, FRA1, LON1, NYC1, NYC2,SFO1, SFO2, NYC3,];
    // cut off: SFO3, SGP1, TOR1, 

    useEffect(() => {
        const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

        //Fetch incidents from Contenful that MrQuyet updates.
        Client.getEntries()
            .then(res => {
                setIncident(res.items)
                console.log(res.items)
            })
            .catch(console.error)

        axios(corsAnywhere + application.config)
            .then(function (response) {
            if (response.statusText === 'OK'){
                setApplication(prev => {
                    return {...prev, isGood: true, loading: false, }
                })
            } else {
                setApplication(prev => {
                    return {...prev, isGood: false, loading: false, }
                })
                console.log('bad');
            }
            })
            .catch(function (error) {
            console.log(error);
            setApplication(prev => {
                return {...prev, isGood: false, loading: false, }
            })
            });

        axios(corsAnywhere + document.config)
            .then(function (response) {
            if (response.statusText === 'OK'){
                setDocument(prev => {
                    return {...prev, isGood: true, loading: false, }
                })
            } else {
                setDocument(prev => {
                    return {...prev, isGood: false, loading: false, }
                })
                console.log('bad');
            }
            })
            .catch(function (error) {
            console.log(error);
            setDocument(prev => {
                return {...prev, isGood: false, loading: false, }
            })
            });
        
        axios(corsAnywhere + crispConfig)
            .then(function (response) {
            if (response.statusText === 'OK'){
                setSupport(prev => {
                    return {...prev, isGood: true, loading: false, }
                })
            } else {
                setSupport(prev => {
                    return {...prev, isGood: false, loading: false, }
                })
                console.log('bad');
            }
            })
            .catch(function (error) {
            console.log(error);
            setSupport(prev => {
                return {...prev, isGood: false, loading: false, }
            })
            });
        
        axios(corsAnywhere + academy.config)
            .then(function (response) {
            if (response.statusText === 'OK'){
                setAcademy(prev => {
                    return {...prev, isGood: true, loading: false, }
                })
            } else {
                setAcademy(prev => {
                    return {...prev, isGood: false, loading: false, }
                })
                console.log('bad');
            }
            })
            .catch(function (error) {
            console.log(error);
            setAcademy(prev => {
                return {...prev, isGood: false, loading: false, }
            })
            });
        
        axios(corsAnywhere + partners.config)
            .then(function (response) {
            if (response.statusText === 'OK'){
                setPartners(prev => {
                    return {...prev, isGood: true, loading: false, }
                })
            } else {
                setPartners(prev => {
                    return {...prev, isGood: false, loading: false, }
                })
                console.log('bad');
            }
            })
            .catch(function (error) {
            console.log(error);
            setPartners(prev => {
                return {...prev, isGood: false, loading: false, }
            })
            });

        
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

        // setSFO3(() => {
        //     return {...apiDemo.regions.SFO3}
        // });

        // setSGP1(() => {
        //     return {...apiDemo.regions.SGP1}
        // });

        // setTOR1(() => {
        //     return {...apiDemo.regions.TOR1}
        // });        
    }, [])

    useEffect(() => {   
        let isAllSystemsLoaded = (allSystems.every(system => !(system.loading)));
        let isAllSystemsGood = (allSystems.every(system => (system.isGood)));
       
       // let isAllRegionsGood = (allRegions.every(region => (region.isGood)));
        if(isAllSystemsGood && isAllSystemsLoaded) {
            setAllSystemsStatus(() => {
                return {isGood: true}
            })
            setLoading(false); 
        } else if (isAllSystemsLoaded) {
            setAllSystemsStatus(() => {
                return {isGood: false}
            })
            setLoading(false); 
        }
    
    }, [application, document, academy, support, partners, loading])
    
    return (
        <Provider value={{  
                            allSystems, 
                            allRegions, 
                            allSystemsStatus, 
                            incident,
                            setIncident,
                            loading,
                        }}>
            {children}
        </Provider>
    )
}

