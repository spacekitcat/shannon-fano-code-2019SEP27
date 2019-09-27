import fs from 'fs';
import process from 'process';
import ByteOccurrenceCountStream from './ByteOccurrenceCountStream';
import Node from './Node';

/** This is prototype code, hence the lack of tests. */
const SayHello = () => {
  const fileName = process.argv[2];
  const fileReadStream = fs.createReadStream(fileName);
  const occurrenceCountStream = new ByteOccurrenceCountStream();

  fileReadStream.on('end', () => {
    console.log(occurrenceCountStream.getOccurrences());
  });

  fileReadStream.pipe(occurrenceCountStream);
};

SayHello();
