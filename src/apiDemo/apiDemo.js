// isGood: true => Operational
// isGood: false => Maintenance
// date: example: Jan 6, 2021

//this is the demo API
export const apiDemo = {
    
    main: {
        application: {
            isGood: true,
            name: "Application", 
            link:"https://apps.pagefly.io/",
        },
        dashboard: {
            isGood: true,
            name: "Dashboard", 
            link: "https://apps.pagefly.io/",
        },
        website: {
            isGood: true,
            name: "Website", 
            link: 'https://pagefly.io/',
        },
        support: {
            isGood: true,
            name: "Live Support", 
            link: 'https://help.pagefly.io/',
        },
    },

    incident: {
        hasIncident: true,

        date: 'Jan 6, 2021',

        title: 'Issues Impacting Cloud Control Panel',

        description: 'Resolved - Our engineers have resolved the issue impacting internal DNS resolution and Cloud Control Panel functionality, and all services/features should now be functioning normally. Thank you for your patience throughout this process. If you notice any further problems, please open a Support ticket right away.',

    },
   
    regions: {
        Global: {
            name: 'Global',
            isGood: true,
        },
        AMS2: {
            name: 'AMS2',
            isGood: true,
        },
        AMS3: {
            name: 'AMS3',
            isGood: true,
        },
        BLR1: {
            name: 'BLR1',
            isGood: true,
        },
        FRA1: {
            name: 'FRA1',
            isGood: true,
        },
        LON1: {
            name: 'LON1',
            isGood: true,
        },
        NYC1: {
            name: 'NYC1',
            isGood: true,
        },
        NYC2: {
            name: 'NYC2',
            isGood: true,
        },
        NYC3: {
            name: 'NYC3',
            isGood: true,
        },
        SFO1: {
            name: 'SF01',
            isGood: true,
        },
        SFO2: {
            name: 'SF02',
            isGood: true,
        },
        SFO3: {
            name: 'SF03',
            isGood: true,
        },
        SGP1: {
            name: 'SGP1',
            isGood: true,
        },
        TOR1: {
            name: 'TOR1',
            isGood: true,
        },
    },       
}