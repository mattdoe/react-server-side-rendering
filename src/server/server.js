import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';

import Auto from '../container/Auto';

const server = express();

server.get('/auto', (req, res) => {
    const autoString = renderToString(<Auto />);

    res.send(autoString);
});