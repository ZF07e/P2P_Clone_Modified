const cors = require('cors');
const express = require("express");
const app = express();
const port = 3000;
const stations = require("./stations-profile.json");
const routes = require("./stations-route.json");
const corsOption = {
    origin: "http://localhost:5173"
}

app.use(cors(corsOption));
app.use(express.json());

app.listen(port, ()=>{
    console.log(`Server Is running on port ${port}`);
})

app.get('/api/stations', (req, res)=>{
    const station_array = stations.stations;
    station_array.sort((a, b)=>a.terminalName.localeCompare(b.terminalName));
    res.status(200).send(station_array)
});

// Dynamic routing
app.get('/api/stations/:station_name', (req, res)=>{
    const {station_name} = req.params;
    const selected_station = stations.stations.find((obj)=> obj.terminalName == station_name);
    const station_routes = [];
    routes.routes.map((obj)=>{
        if(obj.start_point == selected_station.terminalName){
            station_routes.push(obj);
        }
    });

    selected_station.routes = Array.isArray(station_routes)? station_routes: Array(station_routes) ;

    res.status(200).send(selected_station);
});

// For route page rendering
app.get('/api/routes/:routeID', (req, res)=>{
    const {routeID} = req.params;
    const route_array = routes.routes;
    const selected_route = route_array.find((obj) => obj.id == routeID);

    res.status(200).send(selected_route);
});

// For swaping routes to see departure time
app.post('/routes/swap', (req, res)=>{
    const {start_route_ID, end_route_ID} = req.body;
    const route_array = routes.routes;

    if(!end_route_ID || !start_route_ID){
        res.status(401).send({message: "No routes to swap"});
    }

    const swapping_route = route_array.find((obj) => obj.id == end_route_ID && obj.end_id == start_route_ID);

    res.status(200).send(swapping_route)
});