import { db } from '../db.js';


export const getMatches = async (req, res) => {
    const { league, day } = req.params;
    const collection = db.collection(league);
    // date.0.weekday can be : 'Today', 'Yesterday', 'Earlier Today'

    const data = await collection.findOne({ "date.0.weekday": day });

    // if day returns null, return 404
    if (!data) {
        res.status(404).json({ error: `No matches found for ${league} on ${day}` });
        return;
    }

    data.matches = data.matches.filter(match => {
        return match.league[0].name.toLowerCase() === league.toLowerCase();
    }).map(match => {
        // De cada 'match', creamos un nuevo objeto con sólo la información que nos interesa
        return {
            teams: match.teams.map(team => team.tricode), // Obtenemos el 'tricode' de los equipos
            score: match.score // Obtenemos el resultado del partido
        };
    });

    delete data._id;
    delete data.date;

    res.json(data);

}



