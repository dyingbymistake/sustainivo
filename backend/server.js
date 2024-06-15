const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // Update to your frontend URL
    credentials: true
}));

// MongoDB connection string
const mongoURI = 'mongodb+srv://2906saiL:2906saiL@cluster0.xtv46x6.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0'; // Update with your MongoDB URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Define Quiz Schema
const quizSchema = new mongoose.Schema({
    recycle: { type: Number, required: true },
    waterUsage: { type: Number, required: true },
    energyConsumption: { type: Number, required: true },
    report: { type: String, required: true }
});

const QuizResult = mongoose.model('QuizResult', quizSchema);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API. Use /api/quiz to interact with the quiz functionality.');
});

// Endpoint to submit quiz results
app.post('/api/quiz', async (req, res) => {
    const recycle = parseInt(req.body.recycleFrequency);
	const waterUsage = parseInt(req.body.waterUsage);
    const energyConsumption = parseInt(req.body.energyConsumption);
    const report = generateReport(recycle, waterUsage, energyConsumption);
    const newResult = new QuizResult({ recycle, waterUsage, energyConsumption, report });

    try {
        await newResult.save();
        res.json({ report });
    } catch (err) {
		console.log(err)
        res.status(500).json({ error: 'Failed to save quiz result' });
    }
});

// Function to generate report
const generateReport = (recycle, waterUsage, energyConsumption) => {
    let report = 'Your environmental impact is moderate. ';
    if (recycle < 5) report += 'Consider recycling more. ';
    if (waterUsage > 200) report += 'Try reducing your water usage. ';
    if (energyConsumption > 300) report += 'Lower your energy consumption for better efficiency. ';
    return report;
};

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
