// FRONT-END PROTOTYPE: there is no backend yet, so this does not send anything.
// To go live, replace the body with a real request and keep the same contract
// (resolve on success, throw on failure), e.g.:
//
//   const res = await fetch('/api/enquiries', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   })
//   if (!res.ok) throw new Error('Enquiry failed')
export async function submitEnquiry(data) {
  return data
}
