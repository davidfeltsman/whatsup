import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
//app config
const app = express();
const PORT = process.env.PORT || 9000

const pusher = new Pusher({
  appId: '1069547',
  key: '1a9df420b687fedd4af3',
  secret: '130ebe68a2738d559b86',
  cluster: 'eu',
  encrypted: true
});

//middleware
app.use(express.json());
//DB conf
const CONNECTION_URL = 'mongodb+srv://david:851641@cluster0.yqgnv.mongodb.net/whatsupdb?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const DB = mongoose.connection;

DB.once('open', () => {
  console.log('DB connected');

  const msgCollection = DB.collection('messagecontent');
  const changeStream = msgCollection.watch();

  changeStream.on('change', (change) => {
    console.log(change)
  })
})
//

//api routes
app.get('/', (req, res) => res.status(200).send('Hello'))

app.post('/messages/new', (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created: \n ${data}`);
    }
  })
})

app.get('/messages/sync', (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})
//listen
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
