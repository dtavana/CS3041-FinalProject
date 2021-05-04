import bodyParser from 'body-parser';
import express from 'express';
import { resolve } from 'path';
import dotenv from 'dotenv';
import routes from './routes';
import logger from './utils/logger';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.json({
        verify: (req, res, buf) => {
            req.rawBody = buf;
        }
    })
);
app.locals.logger = logger;
// Remove once saving to DB
app.locals.postings = [];
app.use(routes);
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, '../src/frontend', 'views'));
app.use(express.static(resolve(__dirname, '../src/frontend', 'public')));
app.listen(process.env.PORT || 3000, () =>
    logger.info('When2Golf now listening')
);
