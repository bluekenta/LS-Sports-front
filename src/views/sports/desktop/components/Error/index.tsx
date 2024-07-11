export default function({log}: {log: Error}) {
  return (
    <div style={{width: '500px', margin: 'auto', marginTop: '50px'}}>
      <h1 style={{textAlign: 'center'}}>Something went wrong.</h1>
      <p style={{marginTop: '20px', textAlign: 'center'}}>{ log.message }</p>
    </div>
  );
}
