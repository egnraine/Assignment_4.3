const express = require('express');
const Model = require('./model');
const router = express.Router()

module.exports = router;


// Post Method
router.post('/post', async (req, res) => {
    const data = new Model
    ({
        pml: req.body.pml,
        title: req.body.title,
        composer: req.body.composer,
        grade: req.body.grade,
        instrument: req.body.instrument
    })

    try 
    {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) 
    {
        res.status(400).json({ message: error.message })
    }
})


// Get All Method
router.get('/getAll', async (req, res) => 
{
    try
    {
        const data = await Model.find();
        res.json(data)
    }
    catch (error)
    {
    res.status(500).json({ message: error.message })
    }
})



// 5 Queries

// Get by Composer Method
router.get('/getComposer/:composer', async (req, res) => 
{
    try
    {
        const composer = req.params.composer;
        const data = await Model.find({ composer: composer })
        res.json(data)
    }
    catch (error)
    {
        res.status(500).json({ message: error.message })
    }
})


// Get by Grade Method
router.get('/getGrade/:grade', async (req, res) => 
{
    try
    {
        const grade = req.params.grade;
        const data = await Model.find({ grade: grade })
        res.json(data)
    }
    catch (error)
    {
        res.status(500).json({ message: error.message })
    }
})

// Get by Instrument Method
router.get('/getInstrument/:instrument', async (req, res) => 
{
    try
    {
        const instrument = req.params.instrument;
        const data = await Model.find({ instrument: instrument })
        res.json(data)
    }
    catch (error)
    {
        res.status(500).json({ message: error.message })
    }
})


// Sort by Difficulty Method -> by instrument
router.get('/getDiff/:instrument', async (req, res) => 
{
    try
    {
        const instrument = req.params.instrument;
        const data = await Model.find({ instrument: instrument }).sort({ grade: 1 })
        res.json(data)
    }
    catch (error)
    {
        res.status(500).json({ message: error.message })
    }
})


// Sort by PML Method
router.get('/getPml', async (req, res) => 
{
    try
    {
        const data = await Model.find().sort({ pml: 1 })
        res.json(data)
    }
    catch (error)
    {
        res.status(500).json({ message: error.message })
    }
})

