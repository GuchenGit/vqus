const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5100;

app.use(cors());
app.use(express.json());

// MongoDB connection
console.log(process.env)
mongoose.connect(`mongodb://${process.env.MONGODB_WORKER_USER}:${process.env.MONGODB_WORKER_PASSWORD}@mongodb:27017/${process.env.MONGO_INITDB_DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// URL model
const UrlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    default: () => Date.now() + 7*24*60*60*1000, // 7 days from creation
  },
});

// Create TTL index on expiresAt field
UrlSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const Url = mongoose.model('Url', UrlSchema);

// Shorten URL route
app.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = shortid.generate();

  try {
    const url = new Url({ originalUrl, shortUrl });
    await url.save();
    res.json({ shortUrl });
  } catch (error) {
    res.status(500).json({ error: 'Error shortening URL' });
  }
});

app.get('/s/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({
      shortUrl,
    });

    if (url) {
      return res.redirect(url.originalUrl);
    }

    return res.status(404).json({ error: 'URL not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Error redirecting to URL' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});