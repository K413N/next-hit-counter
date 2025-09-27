'use client'
import React from 'react';

import {
  readFile,
  writeFile,
} from '../../helpers/file-helpers';

const DATABASE_PATH = '/src/database.json';


const [isCensored, setIsCensored] = React.useState(false)

function HitCounter() {
  let { hits } = JSON.parse(
    readFile(DATABASE_PATH)
  );

  hits += 1

  writeFile(DATABASE_PATH, JSON.stringify({hits}))
  return (
    <main>
      <p> you are visitor number
        <button className={isCensored ? "censored" : undefined}>{hits}.</button>
        </p>
    </main>
  );
}

export default HitCounter;