const express = require('express');

const CattleRouter = require('./Cattle/Routers/cattle-router.js');
const EquineRouter = require('./Cattle/Routers/equine-router.js');
const SwineRouter = require( './Cattle/Routers/swine-router.js');
const SheepAndGoatsRouter = require('./Cattle/Routers/SheepAndGoats-router.js');
const StraigtGrainsRouter = require('./Cattle/Routers//StraightGrains-router.js');
const PoultryRouter = require('./Cattle//Routers/Poultry-router.js');
const RabbitRouter = require('./Cattle/Routers/Rabbit-router.js');
const server = express();

server.use(express.json());
server.use('/api/Cattle', CattleRouter);
server.use('/api/equine', EquineRouter);
server.use('/api/swine',   SwineRouter);
server.use('/api/rabbit', RabbitRouter);
server.use('/api/poultry',PoultryRouter);
server.use('/api/sheepandgoat', SheepAndGoatsRouter);
server.use('/api/straightGrain', StraigtGrainsRouter);

module.exports = server;