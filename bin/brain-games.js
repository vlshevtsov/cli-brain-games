#!/usr/bin/env node
import askName from '../src/cli.js';

const userName = askName(); 
console.log('Welcome to the Brain Games!');
console.log(`Hello, ${userName}!`);