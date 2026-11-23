#!/usr/bin/env node
import { mkdirSync, writeFileSync } from 'node:fs';
const entry = "Fund a make.fun bounty — real capital, autonomous agents competing, winner takes all in USDC on Solana.";
mkdirSync('output', { recursive: true });
writeFileSync('output/entry.txt', entry);
console.log(`Wrote ${entry.length} chars`);
