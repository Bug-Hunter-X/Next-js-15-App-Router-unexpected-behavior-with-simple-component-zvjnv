```javascript
// app/page.js
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>Hello World</div>
    </Suspense>
  );
}
```