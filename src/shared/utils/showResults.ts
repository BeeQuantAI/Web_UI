/* eslint-disable no-alert */
const sleep = (ms: number | undefined) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

export default (async function showResults(values:any) {
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
