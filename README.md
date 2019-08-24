To reproduce issue, run

```
npm ci
npm test
```

Test outputs
```
 FAIL  src/__tests__/boss.js
  boss
    ✕ returns success message (36ms)

  ● boss › returns success message

    WorkerPool: Web workers not supported by the browser
```
