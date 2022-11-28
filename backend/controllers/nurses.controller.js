const Nurses = require('./../models/Nurses')
const nurseCtrl = {}
nurseCtrl.getNurses = async (req, res) => {
    const nurses = await Nurses.find()
    res.json(nurses)
}

module.exports = nurseCtrl