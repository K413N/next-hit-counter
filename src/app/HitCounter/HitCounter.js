import React from 'react';
import { styles } from './styles'

function HitCounter() {
  let { hits } = JSON.parse(
    readFile(DATABASE_PATH)
  );

  hits += 1

  writeFile(DATABASE_PATH, JSON.stringify({hits}))
  return (
    <main>
      <h1>Welcome!</h1>
      <div>You are visitor number</div>

        <button className="censored">{hits}.</button>
    </main>
  );
}

export default HitCounter;