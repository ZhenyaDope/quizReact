import React from 'react';
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <div className="App">
        <Layout>
            <div className={{width:'400px', border: '1px solid black'}}>
                <h1>Layout works!</h1>
            </div>
        </Layout>
    </div>
  );
}

export default App;
