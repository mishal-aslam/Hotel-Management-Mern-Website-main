const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// models 
const Staff = require('./models/staff');
const Room = require('./models/roomManagement');
const Customer = require('./models/customer');
const Services = require('./models/services');


const app = express();
app.use(express.json());
app.use(cors());

// Connect to the database
mongoose.connect('mongodb://localhost:27017/Hotel-Management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// GET API staff
app.get('/getstaff', async (req, res) => {
    try {
        const data = await Staff.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});

// POST API staff
app.post('/addstaff', async (req, res) => {
    try {
        const data = await Staff.create(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error creating data' });
    }
});

// UPDATE API staff details
app.patch('/updatestaff/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Staff.findByIdAndUpdate(id, req.body, { new: true });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error updating data' });
    }
});

// UPDATE API staff status only
app.patch('/updatestaffstatus/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Staff.findByIdAndUpdate(id, { status: req.body.status }, { new: true });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error updating status' });
    }
});
  
// get room management api 
app.get('/getroom', async (req, res) => {
    try {
        const data = await Room.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});

// POST API staff
app.post('/addroom', async (req, res) => {
    try {
        const data = await Room.create(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error creating data' });
    }
});

// Customer Get API
app.get('/getCustomer', async (req, res) => {
    try {
        const data = await Customer.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});
// Customer POST API 
app.post('/addCustomer', async (req, res) => {
    try {
        const data = await Customer.create(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error creating data' });
    }
});

//////////////////////////////

// Services Get API
app.get('/getServices', async (req, res) => {
    try {
        const data = await Services.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});
// Services POST API 
app.post('/addServices', async (req, res) => {
    try {
        const data = await Services.create(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error creating data' });
    }
});
///////////////////////////


// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});